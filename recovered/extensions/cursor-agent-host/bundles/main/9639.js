// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 9639 range:3529746..3606202
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9639: (e, t, r) => {
    "use strict";
    function n(e2) {
      const t2 = e2.replace(/\\/g, "/").split("/"), r2 = t2[t2.length - 1] ?? "";
      return "SKILL.md" === r2 && t2.length >= 2 ? t2[t2.length - 2] ?? "" : r2;
    }
    r.d(t, { rFE: () => Et, jnL: () => bt, riQ: () => wt, acw: () => vt, iKs: () => _t, dSv: () => Be, yJV: () => er, yWW: () => bn, R10: () => et, sn5: () => Ye, dwX: () => Pe, gl4: () => ft, FHy: () => Qt, J6s: () => jt, cME: () => Lt.c, Jdl: () => Bt, YH2: () => rt, y7k: () => mn, f9i: () => gn, ha6: () => Re, orm: () => ke, Eyz: () => nr, CWo: () => tn.C, n6O: () => x, Thz: () => ln.Th, mHV: () => ln.mH, RZw: () => ln.RZ, Pwd: () => pn.Pw, qLf: () => We.qL, nRD: () => En, VMj: () => Cn, HwP: () => Sr, KHj: () => Rn.K, iul: () => Oe, YhQ: () => Fe, OkD: () => Ge, QCH: () => fn, kUN: () => Ct, sOX: () => tt, IGV: () => cr, iZk: () => st, uwM: () => $e, d_R: () => je, qwl: () => Le, eG3: () => Qe, e7l: () => Ue, ryB: () => ot, $bB: () => an, uaw: () => Kr, mA: () => Vr, Zg0: () => Ce, hv_: () => vn, RpG: () => it, vr_: () => yr, w4j: () => at, zyy: () => ze, Qw5: () => It, IjH: () => gt, IGA: () => lt, PEk: () => nn, I2x: () => Sn, oGr: () => on, jH1: () => ut, u8v: () => dt, UOG: () => kn, bob: () => ht, zNu: () => cn, _1u: () => Pt, Yg2: () => Rt, anv: () => Mt, rn8: () => Nt, bL4: () => yt, ODj: () => $t, Lxn: () => Dt, Yib: () => Ot, Hvh: () => Tt, ggl: () => qt, pY2: () => Ut, sfj: () => Jt, JP: () => br, mku: () => xt, TGP: () => Gt, Nw4: () => en, TIN: () => hn, TZ: () => Er, PiX: () => Ir, ghi: () => Cr, Rdb: () => kr, qNu: () => xr, T0F: () => Tr, ohZ: () => Rr, rSS: () => Tn, _As: () => tr, mlu: () => Ft, pq5: () => Yr, Mfc: () => rr, MZM: () => Zr, VNS: () => Te, oAs: () => sn, GuN: () => rn, qkk: () => qr, wve: () => Dr, ujx: () => u, kQm: () => l, ci8: () => n, OOW: () => c, XPF: () => un, rz0: () => An, ZnQ: () => _n, vx3: () => nt, N1y: () => St, NSZ: () => Ze, sC3: () => Bn, TQC: () => He, Lnu: () => Or });
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
    var d = r(37949), p = r(46144), m = r(55094), h = r(91434), f = r(95339);
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
    const v = (0, d.h)("SimpleControlledExecManager"), _ = (0, p.v5)("agent_exec.controlled.exec.duration_ms", { description: "Duration of controlled exec operations in milliseconds", labelNames: ["exec_case"] }), A = (0, p.Pu)("agent_exec.controlled.exec.success", { description: "Count of successful controlled exec operations", labelNames: ["exec_case"] }), S = (0, p.Pu)("agent_exec.controlled.exec.error", { description: "Count of failed controlled exec operations", labelNames: ["exec_case"] }), b = { computerUseArgs: "Computer use is not enabled for this environment, so the Computer tool and the computerUse subagent cannot run here. Do not retry computer actions; verify with non-GUI methods (automated tests, shell commands) instead. (No computer-use handler is registered on this exec daemon.)", recordScreenArgs: "Screen recording is not enabled for this environment, so recordings cannot be captured here. Do not retry; skip the recording and present other evidence instead. (No record-screen handler is registered on this exec daemon.)" };
    class E extends Error {
      constructor(e2) {
        super(e2), this.name = "ControlledExecDisposedError";
      }
    }
    function I(e2) {
      return e2 instanceof E ? "EXEC_BACKEND_UNAVAILABLE" : e2 instanceof Error && "AgentExecStreamStartTimeoutError" === e2.name ? "AGENT_EXEC_STREAM_START_TIMEOUT" : void 0;
    }
    class C {
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
    class k {
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
    class x {
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
              await a2.write(new m.$Y({ message: { case: "streamClose", value: new m.D9({ id: t2.id }) } })), A.increment(r2, 1, { exec_case: s2 });
            } catch (e4) {
              if (e4 instanceof h.W2) return;
              S.increment(r2, 1, { exec_case: s2 }), await a2.write(new m.$Y({ message: { case: "throw", value: new m.Fu({ id: t2.id, error: e4 instanceof Error ? w(e4.message, e4, { includeStderr: this.includeGitStderrInThrows() }) : "Unknown error", stackTrace: e4 instanceof Error ? e4.stack : void 0, errorCode: I(e4) }) } }));
            } finally {
              const e4 = performance.now() - u2;
              _.histogram(r2, e4, { exec_case: s2 }), clearTimeout(c2), a2.close(), this.runningExecs.delete(t2.id), n2();
            }
          })(), a2;
        }
        this.runningExecs.delete(t2.id), n2();
        const o2 = t2.message.case, i2 = (void 0 === o2 ? void 0 : b[o2]) ?? `No handler found for server message of type ${o2}`;
        return v.error(e2, i2, { messageCase: o2 }), S.increment(e2, 1, { exec_case: s2 }), (async function* () {
          yield new m.$Y({ message: { case: "throw", value: new m.Fu({ id: t2.id, error: i2 }) } }), yield new m.$Y({ message: { case: "streamClose", value: new m.D9({ id: t2.id }) } });
        })();
      }
      static fromResources(e2, t2) {
        const r2 = new x(t2);
        for (const [t3, n2] of e2.entries()) t3.registerControlledImplementation(n2, r2);
        return r2;
      }
    }
    var T = r(98875);
    async function R(e2) {
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
    var B = function(e2, t2, r2) {
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
    }, P = /* @__PURE__ */ (function(e2) {
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
    const J = (0, d.h)("ExecutorResource"), M = (0, p.Pu)("agent_exec.hook_additional_context.delivered", { description: "Hook additional_context carriers drained into the caller collector", labelNames: ["hook_event_name"] });
    class q {
      constructor(e2, t2, r2) {
        this.execManager = e2, this.serializeArgs = t2, this.deserializeResult = r2;
      }
      async execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = B(n2, (0, T.VI)(e2.withName("ExecutorResource.execute")), false), o2 = s2.ctx;
          void 0 !== r2?.execId && s2.span.setAttribute("exec.id", r2.execId);
          const i2 = (0, T.mJ)(o2), a2 = i2 ? new m.Kg(i2) : void 0, c2 = this.execManager.createExecInstance(o2, (e3) => {
            const n3 = this.serializeArgs(e3, t2);
            return new m.Ye({ id: n3.id, message: n3.message, execId: r2?.execId, machineId: r2?.machineId, spanContext: a2, acceptHookAdditionalContexts: void 0 !== r2?.hookContextCollector });
          }), l2 = await R(c2);
          if (void 0 === l2) throw new Error("No exec result");
          let { firstItem: u2, rest: d2 } = l2;
          const p2 = (e3) => {
            if (void 0 !== r2?.hookContextCollector && e3.hookAdditionalContexts.length > 0) {
              r2.hookContextCollector.push(...e3.hookAdditionalContexts);
              for (const t3 of e3.hookAdditionalContexts) M.increment(o2, 1, { hook_event_name: t3.hookEventName });
            }
          };
          p2(u2);
          let h2 = this.deserializeResult(u2);
          for (; void 0 === h2; ) {
            const e3 = await R(d2);
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
          P(n2);
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
          const s2 = B(n2, (0, T.VI)(e2.withName("StreamExecutorResource.execute")), false).ctx, o2 = (0, T.mJ)(s2), i2 = o2 ? new m.Kg(o2) : void 0, a2 = this.execManager.createExecInstance(s2, (e3) => {
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
          P(n2);
        }
      }
    }
    const O = "agent-store-conflict-executor", N = "agent-store-conflict-notice-executor", F = "background-shell-executor", U = "canvas-diagnostics-executor", L = "computer-use-executor", $ = "conversation-search-executor", Q = "delete-executor", j = "diagnostics-executor", G = "fetch-executor", H = "force-background-shell-executor", z = "force-background-subagent-executor", W = "git-diff-executor", V = "grep-executor", K = "hook-executor", Y = "list-mcp-resources-executor", Z = "ls-executor", X = "mcp-allowlist-precheck-executor", ee = "mcp-executor", te = "mcp-state-executor", re = "mini-swe-agent-bash-executor", ne = "pi-bash-executor", se = "pi-edit-executor", oe = "pi-find-executor", ie = "pi-grep-executor", ae = "pi-ls-executor", ce = "pi-read-executor", le = "pi-write-executor", ue = "read-executor", de = "read-mcp-resource-executor", pe = "record-screen-executor", me = "redacted-read-executor", he = "request-context-executor", fe = "shell-allowlist-precheck-executor", ge = "shell-executor", ye = "shell-stream-executor", we = "smart-mode-classifier-executor", ve = "subagent-await-executor", _e = "subagent-executor", Ae = "web-fetch-allowlist-precheck-executor", Se = "write-background-shell-input-executor", be = "write-executor", Ee = "@anysphere/agent-exec/resource/";
    function Ie(e2) {
      return /* @__PURE__ */ Symbol.for(`${Ee}${e2}`);
    }
    function Ce(e2, t2, r2) {
      return { name: e2, symbol: Ie(e2), remoteImplementation: t2, registerControlledImplementation: r2 };
    }
    class ke {
      constructor(e2) {
        this.remoteExecManager = e2;
      }
      get(e2) {
        return e2.remoteImplementation(this.remoteExecManager);
      }
    }
    class xe {
      constructor(e2, t2) {
        this.resource = e2, this.value = t2;
      }
    }
    function Te(e2, t2) {
      return [e2, t2];
    }
    class Re {
      constructor() {
        this.resources = /* @__PURE__ */ new Map();
      }
      register(e2, t2) {
        this.resources.set(e2.symbol, new xe(e2, t2));
      }
      get(e2) {
        return this.resources.get(e2.symbol)?.value;
      }
      entries() {
        return Array.from(this.resources.values()).map((e2) => [e2.resource, e2.value]);
      }
    }
    class Be {
      constructor(e2, t2) {
        this.baseAccessor = e2, this.localResources = /* @__PURE__ */ new Map();
        for (const [e3, r2] of t2) this.localResources.set(e3.symbol, { resource: e3, implementation: r2 });
      }
      get(e2) {
        const t2 = this.localResources.get(e2.symbol);
        return t2 ? t2.implementation : this.baseAccessor.get(e2);
      }
    }
    class Pe {
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
    function Je(e2) {
      return function(t2, r2) {
        return new m.Ye({ id: t2, message: { case: e2, value: r2 } });
      };
    }
    function Me(e2) {
      return (t2) => {
        if (t2.message.case === e2) return t2.message.value;
      };
    }
    function qe(e2) {
      return function(t2, r2) {
        const n2 = { case: e2, value: r2 };
        return new m.yT({ id: t2, message: n2 });
      };
    }
    function De(e2) {
      return function(t2) {
        if (t2.message.case === e2) return { id: t2.id, args: t2.message.value };
      };
    }
    const Oe = Ce(O, (e2) => new q(e2, Je("agentStoreConflictArgs"), Me("agentStoreConflictResult")), (e2, t2) => {
      t2.register(new C(e2, De("agentStoreConflictArgs"), qe("agentStoreConflictResult")));
    });
    /* @__PURE__ */ new Set(["write_conflict", "create_conflict", "truncate_conflict_failed", "conflict_fallback_failed", "quota_exceeded", "gap"]);
    class Ne {
      async execute(e2, t2) {
        return "ack" === t2.op ? { kind: "acked", count: 0 } : "release" === t2.op ? { kind: "released", count: 0 } : "noteDeferredEagerWrittenPaths" === t2.op ? { kind: "noted", count: 0 } : { kind: "not-applicable" };
      }
    }
    const Fe = Ce(N, (e2) => new Ne(), (e2, t2) => {
    });
    async function Ue(e2, t2, r2, n2) {
      return await e2.execute(t2, { op: "syncAndPeek", ...void 0 !== r2?.conversationId ? { conversationId: r2.conversationId } : {}, ...void 0 !== r2?.writtenPaths ? { writtenPaths: r2.writtenPaths } : {}, ...void 0 !== r2?.timeoutMs ? { timeoutMs: r2.timeoutMs } : {}, ...true === r2?.eager ? { eager: true } : {} }, n2);
    }
    async function Le(e2, t2, r2, n2) {
      return await e2.execute(t2, { op: "peek", ...void 0 !== r2?.conversationId ? { conversationId: r2.conversationId } : {} }, n2);
    }
    async function $e(e2, t2, r2, n2, s2) {
      0 !== r2.length && await e2.execute(t2, { op: "ack", eventIds: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, s2);
    }
    async function Qe(e2, t2, r2, n2, s2) {
      0 !== r2.length && await e2.execute(t2, { op: "release", eventIds: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, s2);
    }
    async function je(e2, t2, r2, n2, s2) {
      0 !== r2.length && await e2.execute(t2, { op: "noteDeferredEagerWrittenPaths", writtenPaths: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, s2);
    }
    const Ge = Ce(F, (e2) => new q(e2, Je("backgroundShellSpawnArgs"), Me("backgroundShellSpawnResult")), (e2, t2) => {
      t2.register(new C(e2, De("backgroundShellSpawnArgs"), qe("backgroundShellSpawnResult")));
    }), He = Ce(Se, (e2) => new q(e2, Je("writeShellStdinArgs"), Me("writeShellStdinResult")), (e2, t2) => {
      t2.register(new C(e2, De("writeShellStdinArgs"), qe("writeShellStdinResult")));
    });
    function ze(e2) {
      const t2 = {};
      return "string" == typeof e2.title && e2.title.trim().length > 0 && (t2.title = e2.title), "string" == typeof e2.cwd && e2.cwd.trim().length > 0 && (t2.cwd = e2.cwd), "number" == typeof e2.startTimeMs && Number.isFinite(e2.startTimeMs) && e2.startTimeMs > 0 && (t2.startTimeMs = String(Math.floor(e2.startTimeMs))), Object.keys(t2).length > 0 ? t2 : void 0;
    }
    var We = r(11491);
    function Ve(e2, t2) {
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
        const { queue: n2, replaced: s2 } = Ve(this.pending, { ...e2, id: t2 });
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
          const { queue: t3, replaced: r3 } = Ve(s2, e3);
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
    const Ye = "local";
    function Ze(e2) {
      if (void 0 !== e2) switch (e2) {
        case "task_finished":
          return We.U6.TASK_FINISHED;
        case "task_progress":
          return We.U6.TASK_PROGRESS;
        default:
          return e2;
      }
    }
    function Xe(e2, t2) {
      return !t2 || (!t2.kind || e2.kind === t2.kind) && ((!t2.state || e2.state === t2.state) && (!t2.ownerId || e2.ownerId === t2.ownerId));
    }
    class et {
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
        for (const t2 of this.records.values()) if ("running" === t2.state && Xe(t2, e2)) return true;
        return false;
      }
      abortAllWork(e2) {
        let t2 = 0;
        for (const r2 of [...this.records.values()]) Xe(r2, e2) && (r2.abort && r2.abort(), t2++, this.records.delete(r2.id), this.wakeups.unsuppressId(r2.id));
        return t2;
      }
      listWork(e2) {
        const t2 = [];
        for (const r2 of this.records.values()) Xe(r2, e2) && t2.push({ id: r2.id, kind: r2.kind, state: r2.state, ownerId: r2.ownerId, hasAbort: Boolean(r2.abort), metadata: r2.metadata });
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
        this.enqueue({ conversationId: Ye, id: e2.taskId, payload: e2, source: e2.kind });
      }
      drainCompletions() {
        const e2 = this.wakeups.pullAll();
        return this.ack(e2.map((e3) => e3.id)), e2.map((e3) => e3.payload);
      }
      hasPendingCompletions(e2) {
        return this.wakeups.hasPending(e2);
      }
      markAwaitedCompletion(e2) {
        this.suppress(Ye, e2);
      }
      getWakeupRevision() {
        return this.wakeups.getRevision();
      }
    }
    const tt = Ce(U, (e2) => new q(e2, Je("canvasDiagnosticsArgs"), Me("canvasDiagnosticsResult")), (e2, t2) => {
      t2.register(new C(e2, De("canvasDiagnosticsArgs"), qe("canvasDiagnosticsResult")));
    });
    class rt extends Error {
      constructor(e2) {
        super(e2), this.code = "NO_GIT_API", this.name = "NoGitAPIError", Error.captureStackTrace && Error.captureStackTrace(this, rt);
      }
    }
    function nt(e2) {
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
    const st = Ce(L, (e2) => new q(e2, Je("computerUseArgs"), Me("computerUseResult")), (e2, t2) => {
      t2.register(new C(e2, De("computerUseArgs"), qe("computerUseResult")));
    }), ot = Ce($, (e2) => new q(e2, Je("conversationSearchArgs"), Me("conversationSearchResult")), (e2, t2) => {
      t2.register(new C(e2, De("conversationSearchArgs"), qe("conversationSearchResult")));
    }), it = Ce(Q, (e2) => new q(e2, Je("deleteArgs"), Me("deleteResult")), (e2, t2) => {
      t2.register(new C(e2, De("deleteArgs"), qe("deleteResult")));
    }), at = Ce(j, (e2) => new q(e2, Je("diagnosticsArgs"), Me("diagnosticsResult")), (e2, t2) => {
      t2.register(new C(e2, De("diagnosticsArgs"), qe("diagnosticsResult")));
    });
    var ct = r(33002);
    (0, ct.cF)(/* @__PURE__ */ Symbol("execConversationId"), void 0), (0, ct.cF)(/* @__PURE__ */ Symbol("execRequestId"), void 0), (0, ct.cF)(/* @__PURE__ */ Symbol("execBrowserOperationSource"), void 0);
    const lt = Ce(G, (e2) => new q(e2, Je("fetchArgs"), Me("fetchResult")), (e2, t2) => {
      t2.register(new C(e2, De("fetchArgs"), qe("fetchResult")));
    }), ut = Ce(W, (e2) => new q(e2, Je("gitDiffRequest"), Me("gitDiffResponse")), (e2, t2) => {
      t2.register(new C(e2, De("gitDiffRequest"), qe("gitDiffResponse")));
    }), dt = Ce(V, (e2) => new q(e2, Je("grepArgs"), Me("grepResult")), (e2, t2) => {
      t2.register(new C(e2, De("grepArgs"), qe("grepResult")));
    });
    var pt = r(91022), mt = r(70355);
    const ht = Ce(K, (e2) => new q(e2, Je("executeHookArgs"), Me("executeHookResult")), (e2, t2) => {
      t2.register(new C(e2, De("executeHookArgs"), qe("executeHookResult")));
    });
    class ft {
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
            const e3 = r2.request.value, t3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), trigger: "manual" === e3.trigger ? "manual" : "auto", context_usage_percent: e3.contextUsagePercent, context_tokens: Number(e3.contextTokens), context_window_size: Number(e3.contextWindowSize), message_count: e3.messageCount, messages_to_compact: e3.messagesToCompact, is_first_compaction: e3.isFirstCompaction }, n3 = await this.hookExecutor.executeHookForStep(pt._E.preCompact, t3);
            return new m.S1({ response: new m.w5({ response: { case: "preCompact", value: new mt.$_({ userMessage: n3?.user_message }) } }) });
          }
          case "subagentStart": {
            const e3 = r2.request.value, t3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), subagent_id: e3.subagentId, subagent_type: e3.subagentType, task: e3.task, parent_conversation_id: e3.parentConversationId, tool_call_id: e3.toolCallId, subagent_model: e3.subagentModel, is_parallel_worker: e3.isParallelWorker, git_branch: e3.gitBranch }, n3 = await this.hookExecutor.executeHookForStep(pt._E.subagentStart, t3);
            return new m.S1({ response: new m.w5({ response: { case: "subagentStart", value: new mt.W0({ permission: n3?.permission, userMessage: n3?.user_message, additionalContext: n3?.additional_context }) } }) });
          }
          case "subagentStop": {
            const e3 = r2.request.value, t3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), subagent_id: e3.subagentId, subagent_type: e3.subagentType, status: e3.status, duration_ms: Number(e3.durationMs), summary: e3.summary, parent_conversation_id: e3.parentConversationId, message_count: e3.messageCount, tool_call_count: e3.toolCallCount, error_message: e3.errorMessage, modified_files: e3.modifiedFiles, git_branch: e3.gitBranch, loop_count: e3.loopCount ?? 0, task: e3.task, description: e3.description, ...e3.childConversationId ? { child_conversation_id: e3.childConversationId } : {} }, n3 = await this.hookExecutor.executeHookForStep(pt._E.subagentStop, t3);
            return new m.S1({ response: new m.w5({ response: { case: "subagentStop", value: new mt.AH({ followupMessage: n3?.followup_message, additionalContext: n3?.additional_context }) } }) });
          }
          case "beforeSubmitPrompt": {
            const e3 = r2.request.value, t3 = await this.hookExecutor.executeHookForStep(pt._E.beforeSubmitPrompt, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), prompt: e3.prompt, attachments: (n2 = e3.attachments, n2.flatMap((e4) => "file" === e4.type || "rule" === e4.type ? [{ type: e4.type, file_path: e4.filePath }] : [])), composer_mode: e3.composerMode });
            return new m.S1({ response: new m.w5({ response: { case: "beforeSubmitPrompt", value: new mt.u1({ continue: t3?.continue, userMessage: t3?.user_message, additionalContext: t3?.additional_context }) } }) });
          }
          case "afterAgentResponse": {
            const e3 = r2.request.value;
            return await this.hookExecutor.executeHookForStep(pt._E.afterAgentResponse, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), text: e3.text, input_tokens: void 0 !== e3.inputTokens ? Number(e3.inputTokens) : void 0, output_tokens: void 0 !== e3.outputTokens ? Number(e3.outputTokens) : void 0, cache_read_tokens: void 0 !== e3.cacheReadTokens ? Number(e3.cacheReadTokens) : void 0, cache_write_tokens: void 0 !== e3.cacheWriteTokens ? Number(e3.cacheWriteTokens) : void 0 }), new m.S1({ response: new m.w5({ response: { case: "afterAgentResponse", value: new mt.FW() } }) });
          }
          case "afterAgentThought": {
            const e3 = r2.request.value;
            return await this.hookExecutor.executeHookForStep(pt._E.afterAgentThought, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), text: e3.text, duration_ms: void 0 !== e3.durationMs ? Number(e3.durationMs) : void 0 }), new m.S1({ response: new m.w5({ response: { case: "afterAgentThought", value: new mt.H() } }) });
          }
          case "stop": {
            const e3 = r2.request.value, t3 = await this.hookExecutor.executeHookForStep(pt._E.stop, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), status: e3.status, loop_count: e3.loopCount, input_tokens: void 0 !== e3.inputTokens ? Number(e3.inputTokens) : void 0, output_tokens: void 0 !== e3.outputTokens ? Number(e3.outputTokens) : void 0, cache_read_tokens: void 0 !== e3.cacheReadTokens ? Number(e3.cacheReadTokens) : void 0, cache_write_tokens: void 0 !== e3.cacheWriteTokens ? Number(e3.cacheWriteTokens) : void 0 });
            return new m.S1({ response: new m.w5({ response: { case: "stop", value: new mt.rT({ followupMessage: t3?.followup_message }) } }) });
          }
          case "preToolUse": {
            const e3 = r2.request.value, t3 = e3.toolInput ? e3.toolInput.toJson() : {}, n3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), ...e3.parentToolCallId ? { parent_tool_call_id: e3.parentToolCallId } : {}, tool_name: e3.toolName, tool_input: t3, tool_use_id: e3.toolUseId, cwd: e3.cwd }, s2 = await this.hookExecutor.executeHookForStep(pt._E.preToolUse, n3);
            return new m.S1({ response: new m.w5({ response: { case: "preToolUse", value: new mt.Wn({ permission: s2?.permission, userMessage: s2?.user_message, agentMessage: s2?.agent_message, updatedInput: s2?.updated_input ? JSON.stringify(s2.updated_input) : void 0, additionalContext: s2?.additional_context }) } }) });
          }
          case "postToolUse": {
            const e3 = r2.request.value, t3 = e3.toolInput ? e3.toolInput.toJson() : {}, n3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), ...e3.parentToolCallId ? { parent_tool_call_id: e3.parentToolCallId } : {}, tool_name: e3.toolName, tool_input: t3, tool_output: e3.toolOutput, duration: Number(e3.durationMs), tool_use_id: e3.toolUseId, cwd: e3.cwd }, s2 = await this.hookExecutor.executeHookForStep(pt._E.postToolUse, n3);
            return new m.S1({ response: new m.w5({ response: { case: "postToolUse", value: new mt.uB({ additionalContext: s2?.additional_context }) } }) });
          }
          case "postToolUseFailure": {
            const e3 = r2.request.value, t3 = e3.toolInput ? e3.toolInput.toJson() : {}, n3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, pt.U4)(e3), ...e3.parentToolCallId ? { parent_tool_call_id: e3.parentToolCallId } : {}, tool_name: e3.toolName, tool_input: t3, error_message: e3.errorMessage, failure_type: e3.failureType, duration: Number(e3.durationMs), tool_use_id: e3.toolUseId, is_interrupt: e3.isInterrupt }, s2 = await this.hookExecutor.executeHookForStep(pt._E.postToolUseFailure, n3);
            return new m.S1({ response: new m.w5({ response: { case: "postToolUseFailure", value: new mt.U1({ additionalContext: s2?.additional_context }) } }) });
          }
          default:
            return new m.S1({ response: void 0 });
        }
        var n2;
      }
    }
    (0, ct.cF)(/* @__PURE__ */ Symbol("execHookConversationId"), void 0), (0, ct.cF)(/* @__PURE__ */ Symbol("execHookGenerationId"), void 0), (0, ct.cF)(/* @__PURE__ */ Symbol("execHookModel"), void 0);
    const gt = (0, ct.cF)(/* @__PURE__ */ Symbol("execHookWorkspaceRoots"), void 0), yt = Ce(Z, (e2) => new q(e2, Je("lsArgs"), Me("lsResult")), (e2, t2) => {
      t2.register(new C(e2, De("lsArgs"), qe("lsResult")));
    }), wt = "cursor-ide-browser", vt = "cursor-dev-control", _t = "custom-user-tools", At = /* @__PURE__ */ new Set(["cursor-app-control", "cursor-backend-control", "cursor-browser-extension", wt, vt, _t, "fsd", "cursor-subscriptions", "cursor-cloud", "suggestions", "Cursor Slack Tools", "Cursor Automation Tools"]);
    function St(e2) {
      return !At.has(e2);
    }
    const bt = "cursor", Et = /* @__PURE__ */ new Set([vt, wt]);
    function It(e2) {
      if (void 0 !== e2 && 0 !== Object.keys(e2).length) try {
        return JSON.stringify(e2);
      } catch {
        return;
      }
    }
    function Ct(e2) {
      return { name: e2.toolName, description: e2.description, arguments: e2.inputSchema, outputSchema: e2.outputSchema, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId };
    }
    function kt(e2) {
      if (void 0 !== e2) try {
        return JSON.parse(e2);
      } catch {
        return;
      }
    }
    function xt(e2) {
      return kt(e2);
    }
    function Tt(e2) {
      return kt(e2.inputSchemaJson) ?? e2.inputSchema?.toJson();
    }
    function Rt(e2) {
      if ("object" != typeof e2 || null === e2) return false;
      const t2 = e2;
      return "function" == typeof t2.getSnapshot && "function" == typeof t2.getAllSnapshots && "function" == typeof t2.onDidChange;
    }
    var Bt;
    function Pt(e2) {
      return void 0 === e2 || void 0 === e2.serverIdentifiers;
    }
    function Jt(...e2) {
      const [t2, r2] = e2;
      return e2.length < 2 ? t2 : Pt(r2) ? { serverIdentifiers: void 0, reason: t2?.reason ?? r2?.reason } : void 0 === t2 ? r2 : Pt(t2) ? { serverIdentifiers: void 0, reason: t2.reason ?? r2?.reason } : { serverIdentifiers: [.../* @__PURE__ */ new Set([...t2.serverIdentifiers ?? [], ...r2?.serverIdentifiers ?? []])], reason: t2.reason ?? r2?.reason };
    }
    function Mt(e2) {
      return (function(e3) {
        if ("object" != typeof e3 || null === e3) return false;
        const t2 = e3;
        return ["getTools", "getToolSet", "getClients", "getClient", "getInstructions", "getToolsForServers"].every((e4) => "function" == typeof t2[e4]);
      })(e2) && "function" == typeof e2.onDidChange;
    }
    function qt(e2) {
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
    function Dt(e2) {
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
    })(Bt || (Bt = {}));
    const Ot = Ce(ee, (e2) => new q(e2, Je("mcpArgs"), Me("mcpResult")), (e2, t2) => {
      t2.register(new C(e2, De("mcpArgs"), qe("mcpResult")));
    }), Nt = Ce(Y, (e2) => new q(e2, Je("listMcpResourcesExecArgs"), Me("listMcpResourcesExecResult")), (e2, t2) => {
      t2.register(new C(e2, De("listMcpResourcesExecArgs"), qe("listMcpResourcesExecResult")));
    }), Ft = Ce(de, (e2) => new q(e2, Je("readMcpResourceExecArgs"), Me("readMcpResourceExecResult")), (e2, t2) => {
      t2.register(new C(e2, De("readMcpResourceExecArgs"), qe("readMcpResourceExecResult")));
    }), Ut = Ce(te, (e2) => new q(e2, Je("mcpStateExecArgs"), Me("mcpStateExecResult")), (e2, t2) => {
      t2.register(new C(e2, De("mcpStateExecArgs"), qe("mcpStateExecResult")));
    });
    var Lt = r(88107);
    const $t = Ce(X, (e2) => new q(e2, Je("mcpAllowlistPrecheckArgs"), Me("mcpAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new C(e2, De("mcpAllowlistPrecheckArgs"), qe("mcpAllowlistPrecheckResult")));
    }), Qt = "mcps", jt = "tools";
    function Gt(e2) {
      try {
        const t2 = JSON.parse(e2);
        return "string" == typeof t2.name && t2.name.length > 0 ? t2.name : "string" == typeof t2.toolName && t2.toolName.length > 0 ? t2.toolName : void 0;
      } catch {
        return;
      }
    }
    var Ht = r(20941), zt = r(11197), Wt = r(88623), Vt = r(90066), Kt = r(65716), Yt = r(36038);
    const Zt = new TextEncoder();
    async function Xt(e2) {
      const t2 = Zt.encode(e2), r2 = await crypto.subtle.digest("SHA-256", t2);
      return { sha256: [...new Uint8Array(r2)].map((e3) => e3.toString(16).padStart(2, "0")).join(""), bytes: t2.byteLength };
    }
    class er {
      constructor(e2) {
        this.inner = e2;
      }
      async execute(e2, t2, r2) {
        if (true !== t2.digestOnly) return this.inner.execute(e2, t2, r2);
        const n2 = new Wt.a2({ ...t2, digestOnly: void 0 });
        return (async function(e3) {
          if ("success" !== e3.result.case) return e3;
          const t3 = e3.result.value;
          if ("content" !== t3.output.case) return e3;
          const { sha256: r3, bytes: n3 } = await Xt(t3.output.value);
          return new Wt.sV({ result: { case: "success", value: new Wt.mE({ ...t3, output: { case: void 0 }, outputBlobId: void 0, sha256: r3, sizeBytes: BigInt(n3) }) } });
        })(await this.inner.execute(e2, n2, r2));
      }
    }
    const tr = Ce(ue, (e2) => new q(e2, Je("readArgs"), Me("readResult")), (e2, t2) => {
      t2.register(new C(e2, De("readArgs"), qe("readResult")));
    }), rr = Ce(me, (e2) => new q(e2, Je("redactedReadArgs"), Me("redactedReadResult")), (e2, t2) => {
      t2.register(new C(e2, De("redactedReadArgs"), qe("redactedReadResult")));
    }), nr = "$file:", sr = Ht.p, or = 16777216, ir = 4;
    function ar(e2) {
      if ("string" != typeof e2 || !e2.startsWith(nr)) return;
      const t2 = e2.slice(nr.length);
      return (0, Vt.Z1)(t2) ? t2 : void 0;
    }
    function cr(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = (e3) => {
        const n2 = ar(e3);
        void 0 !== n2 ? t2.add(n2) : Array.isArray(e3) ? e3.forEach(r2) : null !== e3 && "object" == typeof e3 && Object.values(e3).forEach(r2);
      };
      return r2(e2), [...t2];
    }
    const lr = (0, p.Pu)("mcp.symbolic_args.expansion", { description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary", labelNames: ["route", "outcome"] }), ur = (0, p.v5)("mcp.symbolic_args.bytes", { description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments", labelNames: ["route"] }), dr = (0, p.Pu)("mcp.symbolic_args.describe", { description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)", labelNames: ["source"] }), pr = (0, p.v5)("mcp.symbolic_args.paths", { description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call", labelNames: ["route"] });
    function mr(e2, t2, r2) {
      return { kind: e2, message: `Could not resolve the symbolic argument "${nr}${t2}": ${r2} A string argument of the form "${nr}/absolute/path" is replaced with that file's contents before the tool runs; pass the literal text instead if you did not intend that.` };
    }
    class hr extends Error {
      constructor(e2) {
        super(e2.message), this.failure = e2;
      }
    }
    async function fr(e2, t2, r2, n2, s2, { maxFileBytes: o2 = sr, maxTotalBytes: i2 = or }) {
      if (t2.length > ir) throw new hr(mr("too_many", t2[ir] ?? "", `at most ${ir} symbolic arguments may be used in one call (${t2.length} given). Split the call or pass paths to tools that accept them.`));
      const a2 = r2();
      if (void 0 === a2) throw new hr(mr("no_read_executor", t2[0] ?? "", "this environment cannot read files on behalf of a tool call."));
      const c2 = await (0, Kt.xb)(t2, (t3) => (async function(e3, t4, r3, n3, s3, o3) {
        const i3 = await t4.execute(e3, new Wt.a2({ path: r3, toolCallId: n3, ...o3 ? { digestOnly: true } : {} }));
        switch (i3.result.case) {
          case "success": {
            const t5 = i3.result.value, n4 = o3 && void 0 !== t5.sha256 && void 0 !== t5.sizeBytes ? { sha256: t5.sha256, bytes: Number(t5.sizeBytes) } : void 0;
            if (void 0 === n4 && "content" !== t5.output.case) throw new hr(mr("not_text", r3, "the file is not a text file."));
            if (o3 && (dr.increment(e3, 1, { source: void 0 !== n4 ? "vm_digest" : "outdated_executor" }), void 0 === n4)) throw new hr(mr("outdated_executor", r3, "the computer that would run this tool has an older tool runner that cannot substitute files. Read the file and pass its contents instead."));
            const a3 = "content" === t5.output.case ? t5.output.value : void 0, { sha256: c3, bytes: l3 } = n4 ?? await Xt(a3 ?? "");
            if (t5.truncated || l3 > s3) throw new hr(mr("too_large", r3, `the file is too large to inline (${Number(t5.fileSize) || l3} bytes; at most ${s3} bytes per file may be substituted). Pass the path to a tool that accepts one, or read a range of it.`));
            return { content: a3, bytes: l3, sha256: c3 };
          }
          case "fileNotFound":
            throw new hr(mr("not_found", r3, "the file does not exist."));
          case "permissionDenied":
            throw new hr(mr("permission_denied", r3, "reading it was not permitted."));
          case "rejected":
            throw new hr(mr("rejected", r3, `${i3.result.value.reason || "the read was rejected"}. Only files the Read tool can read without approval can be substituted; read it with Read instead.`));
          case "invalidFile":
            throw new hr(mr("not_text", r3, "the file cannot be read as text."));
          case "error":
            throw new hr(mr("read_error", r3, i3.result.value.error));
          default:
            throw new hr(mr("read_error", r3, "the read returned no result."));
        }
      })(e2, a2, t3, n2, o2, s2), { max: ir });
      let l2 = 0;
      for (const [e3, r3] of c2) if (l2 += r3.bytes, l2 > i2) throw new hr(mr("over_budget", e3, `together the ${t2.length} symbolic arguments exceed the ${i2} bytes that may be substituted per call. Pass paths to tools that accept them instead.`));
      return c2;
    }
    function gr(e2, t2) {
      return e2 instanceof hr ? e2.failure : mr("read_error", t2, e2 instanceof Error ? e2.message : String(e2));
    }
    async function yr(e2, { paths: t2, getReadExecutor: r2, toolCallId: n2, ...s2 }) {
      const o2 = [...new Set(t2)];
      try {
        const t3 = await fr(e2, o2, r2, n2, true, s2);
        return lr.increment(e2, 1, { route: "review", outcome: "described" }), { kind: "described", descriptors: o2.map((e3) => {
          const r3 = t3.get(e3);
          return new zt.n({ path: e3, sha256: r3?.sha256 ?? "", sizeBytes: BigInt(r3?.bytes ?? 0) });
        }) };
      } catch (t3) {
        const r3 = gr(t3, o2[0] ?? "");
        return lr.increment(e2, 1, { route: "review", outcome: r3.kind }), { kind: "failed", failure: r3 };
      }
    }
    async function wr(e2, t2, { route: r2, getReadExecutor: n2, ...s2 }) {
      if (0 === t2.symbolicPathArguments.length) return { kind: "none" };
      const o2 = new Map(t2.symbolicPathArguments.map((e3) => [e3.path, e3])), i2 = [...o2.keys()], a2 = (t3) => (lr.increment(e2, 1, { route: r2, outcome: t3.kind }), { kind: "failed", failure: t3, result: new zt.iz({ result: { case: "error", value: new zt.Nh({ error: t3.message }) } }) });
      let c2;
      try {
        c2 = await fr(e2, i2, n2, t2.toolCallId, false, s2);
      } catch (e3) {
        return a2(gr(e3, i2[0] ?? ""));
      }
      let l2 = 0;
      for (const [e3, t3] of c2) {
        l2 += t3.bytes;
        const r3 = o2.get(e3);
        if (r3?.sha256 !== t3.sha256) return a2(mr("content_changed", e3, `the file changed after the call was reviewed (${r3?.sizeBytes ?? 0} bytes then, ${t3.bytes} bytes now), so its new contents were not sent. Re-run the call to review the current contents.`));
      }
      const u2 = new Map([...c2].map(([e3, t3]) => [e3, t3.content ?? ""])), d2 = (function(e3, t3) {
        const r3 = (e4) => {
          const n3 = ar(e4);
          return void 0 !== n3 ? t3.get(n3) ?? e4 : Array.isArray(e4) ? e4.map(r3) : null !== e4 && "object" == typeof e4 ? Object.fromEntries(Object.entries(e4).map(([e5, t4]) => [e5, r3(t4)])) : e4;
        };
        return Object.fromEntries(Object.entries(e3).map(([e4, t4]) => [e4, r3(t4)]));
      })(Object.fromEntries(Object.entries(t2.args).map(([e3, t3]) => [e3, t3.toJson()])), u2), p2 = t2.clone();
      return p2.args = Object.fromEntries(Object.entries(d2).map(([e3, t3]) => [e3, Yt.Value.fromJson(t3)])), p2.symbolicPathArguments = [], lr.increment(e2, 1, { route: r2, outcome: "expanded" }), ur.record(e2, l2, { route: r2 }), pr.record(e2, i2.length, { route: r2 }), { kind: "expanded", expansion: { args: p2, files: [...c2].map(([e3, t3]) => ({ path: e3, bytes: t3.bytes })), paths: i2.length, bytes: l2 } };
    }
    const vr = /\b413\b|payload too large|request entity too large|body.*too large|too large.*body|ECONNRESET|EPIPE|socket hang up|max(?:imum)? (?:body|payload|request|content) (?:size|length)/i;
    function _r(e2, t2, r2, n2) {
      return vr.test(t2) ? (lr.increment(e2, 1, { route: n2, outcome: "server_rejected_body" }), `${t2}

The request carried ${r2.bytes} bytes of file contents substituted from ${r2.paths} "${nr}/abs/path" argument(s), and the server appears to have rejected the request body as too large. Do not retry the same call: pass a smaller file or a range of it, or use a tool that accepts a path or upload instead.`) : t2;
    }
    function Ar(e2) {
      return e2.files.map((e3) => `"${nr}${e3.path}" was replaced with the contents of ${e3.path} (${e3.bytes} bytes) before the call.`).join("\n");
    }
    class Sr {
      constructor(e2, t2) {
        this.inner = e2, this.getReadExecutor = t2;
      }
      isBackendRouted(e2) {
        return this.inner.isBackendRouted?.(e2) ?? false;
      }
      async execute(e2, t2, r2) {
        if (0 === t2.symbolicPathArguments.length) return this.inner.execute(e2, t2, r2);
        const n2 = await wr(e2, t2, { route: "local", getReadExecutor: this.getReadExecutor });
        if ("none" === n2.kind) return this.inner.execute(e2, t2, r2);
        if ("failed" === n2.kind) return n2.result;
        let s2;
        try {
          s2 = await this.inner.execute(e2, n2.expansion.args, r2);
        } catch (t3) {
          throw t3 instanceof Error && (t3.message = _r(e2, t3.message, n2.expansion, "local")), t3;
        }
        return (function(e3, t3, r3, n3) {
          const s3 = t3.clone();
          return "success" === s3.result.case ? s3.result.value.content.push(new zt._Z({ content: { case: "text", value: new zt.zN({ text: Ar(r3) }) } })) : "error" === s3.result.case && (s3.result.value.error = _r(e3, s3.result.value.error, r3, n3)), s3;
        })(e2, s2, n2.expansion, "local");
      }
    }
    const br = Ce(re, (e2) => new q(e2, Je("miniSweAgentBashArgs"), Me("miniSweAgentBashResult")), (e2, t2) => {
      t2.register(new C(e2, De("miniSweAgentBashArgs"), qe("miniSweAgentBashResult")));
    }), Er = Ce(ne, (e2) => new q(e2, Je("piBashArgs"), Me("piBashResult")), (e2, t2) => {
      t2.register(new C(e2, De("piBashArgs"), qe("piBashResult")));
    }), Ir = Ce(se, (e2) => new q(e2, Je("piEditArgs"), Me("piEditResult")), (e2, t2) => {
      t2.register(new C(e2, De("piEditArgs"), qe("piEditResult")));
    }), Cr = Ce(oe, (e2) => new q(e2, Je("piFindArgs"), Me("piFindResult")), (e2, t2) => {
      t2.register(new C(e2, De("piFindArgs"), qe("piFindResult")));
    }), kr = Ce(ie, (e2) => new q(e2, Je("piGrepArgs"), Me("piGrepResult")), (e2, t2) => {
      t2.register(new C(e2, De("piGrepArgs"), qe("piGrepResult")));
    }), xr = Ce(ae, (e2) => new q(e2, Je("piLsArgs"), Me("piLsResult")), (e2, t2) => {
      t2.register(new C(e2, De("piLsArgs"), qe("piLsResult")));
    }), Tr = Ce(ce, (e2) => new q(e2, Je("piReadArgs"), Me("piReadResult")), (e2, t2) => {
      t2.register(new C(e2, De("piReadArgs"), qe("piReadResult")));
    }), Rr = Ce(le, (e2) => new q(e2, Je("piWriteArgs"), Me("piWriteResult")), (e2, t2) => {
      t2.register(new C(e2, De("piWriteArgs"), qe("piWriteResult")));
    });
    var Br = r(44498), Pr = r(19260), Jr = r(62671), Mr = r(19950);
    const qr = Ce(ge, (e2) => new q(e2, Je("shellArgs"), Me("shellResult")), (e2, t2) => {
      t2.register(new C(e2, De("shellArgs"), qe("shellResult")));
    }), Dr = Ce(ye, (e2) => new D(e2, Je("shellStreamArgs"), Me("shellStream")), (e2, t2) => {
      t2.register(new k(e2, De("shellStreamArgs"), qe("shellStream")));
    }), Or = Ce(be, (e2) => new q(e2, Je("writeArgs"), Me("writeResult")), (e2, t2) => {
      t2.register(new C(e2, De("writeArgs"), qe("writeResult")));
    }), Nr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts write operations.", Fr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts shell, write, delete, and MCP operations.";
    function Ur(e2, t2) {
      return new Jr.jn({ command: t2.command ?? "", workingDirectory: t2.workingDirectory ?? "", error: e2, isReadonly: true });
    }
    function Lr(e2) {
      return { execute: async (t2, r2) => new Jr.W4({ result: { case: "permissionDenied", value: Ur(e2, r2) } }) };
    }
    function $r(e2) {
      return { async *execute(t2, r2) {
        yield new Jr.FI({ event: { case: "permissionDenied", value: Ur(e2, r2) } });
      } };
    }
    function Qr(e2) {
      return { execute: async (t2, r2) => new Br.Lt({ result: { case: "permissionDenied", value: Ur(e2, r2) } }) };
    }
    function jr(e2) {
      return { execute: async (t2, r2) => new Mr.v3({ result: { case: "permissionDenied", value: new Mr.U7({ path: r2.path, error: e2, isReadonly: true }) } }) };
    }
    function Gr(e2) {
      return { execute: async (t2, r2) => new Pr.Pi({ result: { case: "permissionDenied", value: new Pr.QG({ path: r2.path, clientVisibleError: e2, isReadonly: true }) } }) };
    }
    function Hr(e2) {
      return { execute: async (t2, r2) => new zt.iz({ result: { case: "permissionDenied", value: new zt.HQ({ error: `${e2} Tool: ${r2.name}`, isReadonly: true }) } }) };
    }
    function zr(e2) {
      return { execute: async (t2, r2) => new Br.nt({ result: { case: "error", value: new Br.Gv({ error: e2 }) } }) };
    }
    function Wr(e2) {
      const t2 = [[Or, jr(e2.errorMessage)], [it, Gr(e2.errorMessage)], [Ot, Hr(e2.errorMessage)]];
      return e2.wrapShell && t2.push([qr, Lr(e2.errorMessage)], [Dr, $r(e2.errorMessage)], [Ge, Qr(e2.errorMessage)]), e2.includeWriteBackgroundShellStdin && t2.push([He, zr(e2.errorMessage)]), t2;
    }
    function Vr(e2, t2) {
      return new Be(e2, Wr({ errorMessage: Nr, wrapShell: t2, includeWriteBackgroundShellStdin: false }));
    }
    function Kr(e2) {
      return new Pe(e2, Wr({ errorMessage: Fr, wrapShell: true, includeWriteBackgroundShellStdin: true }));
    }
    const Yr = Ce(pe, (e2) => new q(e2, Je("recordScreenArgs"), Me("recordScreenResult")), (e2, t2) => {
      t2.register(new C(e2, De("recordScreenArgs"), qe("recordScreenResult")));
    }), Zr = Ce(he, (e2) => new q(e2, Je("requestContextArgs"), Me("requestContextResult")), (e2, t2) => {
      t2.register(new C(e2, De("requestContextArgs"), qe("requestContextResult")));
    });
    var Xr = r(89396);
    function en(e2) {
      const t2 = e2.clone();
      return t2.rules = [], t2.nonFileRules = [], t2.cloudRule = void 0, t2.agentSkills = [], t2.skillOptions = void 0, t2.customSubagents = [], t2.tools = [], t2.mcpInstructions = [], t2.mcpFileSystemOptions = void 0, t2.mcpMetaToolOptions = void 0, { dynamicContext: t2, rules: new Xr.T3({ rules: e2.rules.map((e3) => e3.clone()), nonFileRules: e2.nonFileRules.map((e3) => e3.clone()), cloudRule: e2.cloudRule }), skills: new Xr.CB({ agentSkills: e2.agentSkills.map((e3) => e3.clone()), skillOptions: e2.skillOptions?.clone() }), subagents: new Xr.yb({ customSubagents: e2.customSubagents.map((e3) => e3.clone()) }), mcps: new Xr.vB({ tools: e2.tools.map((e3) => e3.clone()), mcpInstructions: e2.mcpInstructions.map((e3) => e3.clone()), mcpFileSystemOptions: e2.mcpFileSystemOptions?.clone(), mcpMetaToolOptions: e2.mcpMetaToolOptions?.clone() }) };
    }
    var tn = r(82589);
    const rn = Ce(fe, (e2) => new q(e2, Je("shellAllowlistPrecheckArgs"), Me("shellAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new C(e2, De("shellAllowlistPrecheckArgs"), qe("shellAllowlistPrecheckResult")));
    }), nn = Ce(H, (e2) => new q(e2, Je("forceBackgroundShellArgs"), Me("forceBackgroundShellResult")), (e2, t2) => {
      t2.register(new C(e2, De("forceBackgroundShellArgs"), qe("forceBackgroundShellResult")));
    });
    function sn(e2, t2) {
      e2.hookApprovalRequirement = void 0 !== t2 ? new Jr.In(t2) : void 0;
    }
    function on(e2) {
      return e2.hookApprovalRequirement;
    }
    function an(e2) {
      return new Jr.In({ kind: Jr.b.FORCE_PROMPT, reason: e2 });
    }
    function cn(e2) {
      return e2?.kind === Jr.b.FORCE_PROMPT;
    }
    var ln = r(18846);
    const un = Ce(we, (e2) => new q(e2, Je("smartModeClassifierArgs"), Me("smartModeClassifierResult")), (e2, t2) => {
      t2.register(new C(e2, De("smartModeClassifierArgs"), qe("smartModeClassifierResult")));
    });
    var dn = r(39738), pn = r(12544);
    const mn = "Sub-agent is currently running. You may send the follow-up message when it has completed.", hn = (0, ct.cF)(/* @__PURE__ */ Symbol("pendingSubagentReplay"), void 0);
    function fn(e2) {
      return `Too many local subagents are already running (limit: ${e2.maxRunning}). Wait for running subagents to finish (or collect background subagent results) before starting another one.`;
    }
    const gn = "If you intended to interrupt this agent, you may retry with `interrupt` set to true";
    class yn extends Error {
      constructor(e2, t2) {
        super(e2), this.name = "SubagentHostError", this.agentId = t2?.agentId, this.cause = t2?.cause;
      }
    }
    const wn = 1e3;
    function vn(e2) {
      const t2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map();
      async function n2(t3, r3, n3) {
        let s2;
        try {
          s2 = await e2.createOrResumeSession(t3, r3);
          const o2 = await e2.runSession(t3, s2, r3, { execId: n3?.execId });
          return "error" === o2.status ? new pn.vS({ result: { case: "error", value: new pn.od({ agentId: s2, error: o2.error }) } }) : "aborted" === o2.status ? new pn.vS({ result: { case: "error", value: new pn.od({ agentId: s2, error: o2.error ?? "Subagent was aborted by the user" }) } }) : "background" === o2.status ? new pn.vS({ result: { case: "success", value: new pn.HJ({ agentId: s2, finalMessage: o2.finalMessage, toolCallCount: o2.toolCallCount ?? 0, backgroundReason: o2.backgroundReason, transcriptPath: o2.transcriptPath }) } }) : new pn.vS({ result: { case: "success", value: new pn.HJ({ agentId: s2, finalMessage: o2.finalMessage, toolCallCount: o2.toolCallCount ?? 0 }) } });
        } catch (t4) {
          if (s2 && e2.releaseSession && e2.releaseSession(s2), t4 instanceof dn.l4) throw t4;
          const n4 = t4 instanceof Error ? t4.message : String(t4), o2 = s2 ?? (function(e3) {
            if (e3 instanceof yn && e3.agentId) return e3.agentId;
            if (!e3 || "object" != typeof e3) return;
            const t5 = e3;
            return "string" == typeof t5.agentId ? t5.agentId : void 0;
          })(t4) ?? r3.resumeAgentId;
          return new pn.vS({ result: { case: "error", value: new pn.od({ ...o2 ? { agentId: o2 } : {}, error: n4 }) } });
        }
      }
      return { execute(e3, s2, o2) {
        const i2 = (function(e4) {
          if (e4.toolCallId && e4.parentConversationId) return [e4.parentConversationId, e4.toolCallId, e4.resumeAgentId ?? "", e4.forkAgentId ?? ""].join("\0");
        })(s2);
        if (void 0 === i2) return n2(e3, s2, o2);
        const a2 = r2.get(i2);
        if (void 0 !== a2) return Promise.resolve(a2);
        const c2 = t2.get(i2);
        if (void 0 !== c2) return c2;
        const l2 = n2(e3, s2, o2).then((e4) => ("success" === e4.result.case && (r2.set(i2, e4), r2.size > wn && r2.delete(r2.keys().next().value)), e4)).finally(() => {
          t2.delete(i2);
        });
        return t2.set(i2, l2), l2;
      } };
    }
    const _n = Ce(_e, (e2) => new q(e2, Je("subagentArgs"), Me("subagentResult")), (e2, t2) => {
      t2.register(new C(e2, De("subagentArgs"), qe("subagentResult")));
    }), An = Ce(ve, (e2) => new q(e2, Je("subagentAwaitArgs"), Me("subagentAwaitResult")), (e2, t2) => {
      t2.register(new C(e2, De("subagentAwaitArgs"), qe("subagentAwaitResult")));
    }), Sn = Ce(z, (e2) => new q(e2, Je("forceBackgroundSubagentArgs"), Me("forceBackgroundSubagentResult")), (e2, t2) => {
      t2.register(new C(e2, De("forceBackgroundSubagentArgs"), qe("forceBackgroundSubagentResult")));
    });
    const bn = { segmentChunks: [], assistantCandidate: void 0, candidateDisplacedByPlan: void 0, finalSummary: void 0 };
    class En {
      constructor() {
        this.currentSegmentChunks = [];
      }
      onUpdate(e2) {
        switch (e2.message.case) {
          case "textDelta":
            return void this.currentSegmentChunks.push(e2.message.value.text);
          case "toolCallStarted":
          case "toolCallCompleted": {
            this.closeSegment();
            const { callId: t2, toolCall: r2 } = e2.message.value, n2 = (function(e3) {
              switch (e3?.tool.case) {
                case "sendFinalSummaryToolCall":
                case "communicateUpdateToolCall":
                  return (function(e4) {
                    const t3 = e4?.trim();
                    return t3 && t3.length > 0 ? t3 : void 0;
                  })(e3.tool.value.args?.finalSummary);
                default:
                  return;
              }
            })(r2);
            void 0 !== n2 && (this.finalSummary = n2);
            const s2 = (function(e3) {
              if ("createPlanToolCall" !== e3?.tool.case) return;
              const t3 = e3.tool.value.args?.plan;
              if ("string" != typeof t3 || 0 === t3.trim().length) return;
              return `Plan written to ${e3.tool.value.result?.planUri?.trim() || "unknown plan file"}:
${t3}`;
            })(r2);
            return void (void 0 !== s2 ? ("plan" === this.assistantCandidate?.kind && this.assistantCandidate.callId === t2 || (this.candidateDisplacedByPlan = this.assistantCandidate), this.assistantCandidate = { kind: "plan", callId: t2, value: s2 }) : "plan" === this.assistantCandidate?.kind && this.assistantCandidate.callId === t2 && (this.assistantCandidate = this.candidateDisplacedByPlan, this.candidateDisplacedByPlan = void 0));
          }
          case "stepCompleted":
          case "turnEnded":
            return void this.closeSegment();
          default:
            return;
        }
      }
      snapshot() {
        return { segmentChunks: [...this.currentSegmentChunks], assistantCandidate: this.assistantCandidate, candidateDisplacedByPlan: this.candidateDisplacedByPlan, finalSummary: this.finalSummary };
      }
      restore(e2) {
        this.currentSegmentChunks = [...e2.segmentChunks], this.assistantCandidate = e2.assistantCandidate, this.candidateDisplacedByPlan = e2.candidateDisplacedByPlan, this.finalSummary = e2.finalSummary;
      }
      finalize() {
        this.closeSegment();
        let e2 = this.assistantCandidate?.value;
        if (void 0 === e2) {
          if (void 0 === this.finalSummary) return;
          e2 = "No output";
        }
        return void 0 === this.finalSummary ? e2 : ["<user_visible_high_level_summary>", this.finalSummary, "</user_visible_high_level_summary>", "<response>", e2, "</response>"].join("\n");
      }
      closeSegment() {
        if (0 === this.currentSegmentChunks.length) return;
        const e2 = this.currentSegmentChunks.join("");
        this.currentSegmentChunks = [], "" !== e2.trim() && (this.assistantCandidate = { kind: "text", value: e2 });
      }
    }
    function In(e2, t2) {
      switch (e2.status) {
        case "idle":
          return (function(e3, t3) {
            switch (t3.type) {
              case "startRun":
                return { nextState: { status: "running", runId: t3.runId, abort: t3.abort }, effects: [] };
              case "queueResume":
                return void 0 === t3.targetRunId ? { nextState: e3, effects: [] } : { nextState: { status: "runningWithQueuedResume", runId: t3.targetRunId, queuedResume: t3.queuedResume }, effects: [] };
              case "runFinished":
              case "clearQueuedResume":
              case "abort":
              case "release":
                return { nextState: e3, effects: [] };
              default:
                throw new Error(`Unhandled idle-state event: ${String(t3)}`);
            }
          })(e2, t2);
        case "running":
          return (function(e3, t3) {
            switch (t3.type) {
              case "startRun":
                return { nextState: { status: "running", runId: t3.runId, abort: t3.abort }, effects: [{ type: "abortActiveRun", abort: e3.abort }] };
              case "queueResume":
                return { nextState: { status: "runningWithQueuedResume", runId: e3.runId, abort: e3.abort, queuedResume: t3.queuedResume }, effects: [] };
              case "runFinished":
                return t3.runId !== e3.runId ? { nextState: e3, effects: [] } : { nextState: { status: "idle" }, effects: [] };
              case "clearQueuedResume":
              case "release":
                return { nextState: e3, effects: [] };
              case "abort":
                return { nextState: { status: "idle" }, effects: [{ type: "abortActiveRun", abort: e3.abort }] };
              default:
                throw new Error(`Unhandled running-state event: ${String(t3)}`);
            }
          })(e2, t2);
        case "runningWithQueuedResume":
          return (function(e3, t3) {
            switch (t3.type) {
              case "startRun":
                return { nextState: { status: "runningWithQueuedResume", runId: t3.runId, abort: t3.abort, queuedResume: e3.queuedResume }, effects: [{ type: "abortActiveRun", abort: e3.abort }] };
              case "queueResume":
                return { nextState: { ...e3, queuedResume: t3.mergeQueuedResume(e3.queuedResume, t3.queuedResume) }, effects: [] };
              case "runFinished":
                return t3.runId !== e3.runId ? { nextState: e3, effects: [] } : { nextState: { status: "running", runId: e3.runId, abort: e3.abort }, effects: [{ type: "startQueuedRun", sourceRunId: e3.runId, queuedResume: e3.queuedResume }] };
              case "clearQueuedResume":
                return { nextState: { status: "running", runId: e3.runId, abort: e3.abort }, effects: [] };
              case "abort":
                return { nextState: { status: "idle" }, effects: [{ type: "abortActiveRun", abort: e3.abort }] };
              case "release":
                return { nextState: e3, effects: [] };
              default:
                throw new Error(`Unhandled runningWithQueuedResume-state event: ${String(t3)}`);
            }
          })(e2, t2);
        default:
          return { nextState: e2, effects: [] };
      }
    }
    class Cn {
      constructor(e2 = {}) {
        this.options = e2, this.states = /* @__PURE__ */ new Map(), this.runCounterBySession = /* @__PURE__ */ new Map(), this.dispatchQueueBySession = /* @__PURE__ */ new Map(), this.dispatchInProgress = /* @__PURE__ */ new Set(), this.releaseRequestedBySession = /* @__PURE__ */ new Set();
      }
      getState(e2) {
        return this.states.get(e2) ?? { status: "idle" };
      }
      isBusy(e2) {
        return "idle" !== this.getState(e2).status;
      }
      startRun(e2, t2) {
        const r2 = this.nextRunId(e2);
        return this.enqueueEvent(e2, { type: "startRun", runId: r2, abort: t2?.abort }), r2;
      }
      queueResume(e2, t2) {
        this.enqueueEvent(e2, { type: "queueResume", queuedResume: t2.queuedResume, targetRunId: t2.targetRunId, mergeQueuedResume: t2.mergeQueuedResume });
      }
      finishRun(e2, t2) {
        this.enqueueEvent(e2, { type: "runFinished", runId: t2 });
      }
      clearQueuedResume(e2) {
        this.enqueueEvent(e2, { type: "clearQueuedResume" });
      }
      abort(e2) {
        this.enqueueEvent(e2, { type: "abort" });
      }
      release(e2) {
        this.enqueueEvent(e2, { type: "release" });
      }
      nextRunId(e2) {
        const t2 = (this.runCounterBySession.get(e2) ?? 0) + 1;
        return this.runCounterBySession.set(e2, t2), t2;
      }
      enqueueEvent(e2, t2) {
        const r2 = this.dispatchQueueBySession.get(e2) ?? [];
        r2.push(t2), this.dispatchQueueBySession.set(e2, r2), this.drainEventQueue(e2);
      }
      drainEventQueue(e2) {
        if (this.dispatchInProgress.has(e2)) return;
        let t2;
        this.dispatchInProgress.add(e2);
        try {
          const r2 = this.dispatchQueueBySession.get(e2);
          if (!r2) return;
          for (; r2.length > 0; ) {
            const n2 = r2.shift();
            if (n2) try {
              this.processEvent(e2, n2);
            } catch (e3) {
              t2 ??= e3;
            }
          }
        } finally {
          this.dispatchQueueBySession.delete(e2), this.dispatchInProgress.delete(e2);
        }
        if (t2) throw t2;
      }
      processEvent(e2, t2) {
        const r2 = this.getState(e2), { nextState: n2, effects: s2 } = In(r2, t2);
        this.states.set(e2, n2), this.options.onStateChange?.({ sessionId: e2, previousState: r2, nextState: n2 });
        for (const t3 of s2) switch (t3.type) {
          case "abortActiveRun":
            t3.abort?.();
            break;
          case "startQueuedRun":
            this.options.onQueuedRunReady?.({ sessionId: e2, sourceRunId: t3.sourceRunId, queuedResume: t3.queuedResume });
            break;
          default:
            throw new Error(`Unhandled lifecycle manager effect: ${String(t3)}`);
        }
        const o2 = this.getState(e2);
        "release" === t2.type && "idle" !== o2.status && this.releaseRequestedBySession.add(e2), "idle" !== o2.status || "release" !== t2.type && !this.releaseRequestedBySession.has(e2) || (this.states.delete(e2), this.runCounterBySession.delete(e2), this.releaseRequestedBySession.delete(e2));
      }
    }
    function kn(e2) {
      return "string" == typeof e2 && e2.trim().length > 0;
    }
    function xn(e2) {
      return `--- Cursor Command: ${e2} ---`;
    }
    function Tn(e2, t2) {
      const r2 = t2.filter((t3) => t3.content.length > 0 && !e2.includes(xn(t3.name)));
      if (0 === r2.length) return e2;
      return `<cursor_commands>
${r2.map((e3) => `${xn(e3.name)}
${e3.content}
--- End Command ---`).join("\n")}
</cursor_commands>

${e2}`;
    }
    var Rn = r(83508);
    const Bn = Ce(Ae, (e2) => new q(e2, Je("webFetchAllowlistPrecheckArgs"), Me("webFetchAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new C(e2, De("webFetchAllowlistPrecheckArgs"), qe("webFetchAllowlistPrecheckResult")));
    });
  }