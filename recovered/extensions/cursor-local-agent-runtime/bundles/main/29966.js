// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 29966 range:946243..987856
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29966: (e, t, r) => {
    "use strict";
    function n(e2) {
      const t2 = e2.replace(/\\/g, "/").split("/"), r2 = t2[t2.length - 1] ?? "";
      return "SKILL.md" === r2 && t2.length >= 2 ? t2[t2.length - 2] ?? "" : r2;
    }
    r.d(t, { rFE: () => Ye, jnL: () => Ge, riQ: () => je, acw: () => Je, iKs: () => ze, dSv: () => de, yJV: () => _t, sn5: () => Ie, QHB: () => ae, FHy: () => ut, J6s: () => dt, cME: () => lt.c, y7k: () => Ar, f9i: () => Mr, ha6: () => ue, Eyz: () => kt, CWo: () => br.C, Thz: () => Tr.Th, mHV: () => Tr.mH, RZw: () => Tr.RZ, Pwd: () => Ir.Pw, HwP: () => Jt, KHj: () => Nr.K, iul: () => ye, YhQ: () => we, OkD: () => Ee, kUN: () => Ke, sOX: () => Ae, IGV: () => At, iZk: () => Me, uwM: () => Se, d_R: () => ke, qwl: () => _e, eG3: () => xe, e7l: () => be, ryB: () => Re, $bB: () => Er, uaw: () => yr, mA: () => gr, Zg0: () => ie, RpG: () => Oe, vr_: () => Ut, w4j: () => De, zyy: () => Ce, Qw5: () => Ve, IjH: () => $e, IGA: () => Fe, PEk: () => Sr, I2x: () => Dr, oGr: () => kr, jH1: () => Le, u8v: () => Ue, bob: () => Be, _1u: () => et, rn8: () => st, bL4: () => qe, ODj: () => ct, Lxn: () => nt, Yib: () => ot, Hvh: () => Xe, ggl: () => rt, pY2: () => at, sfj: () => tt, JP: () => zt, TGP: () => pt, TIN: () => Pr, TZ: () => Ht, PiX: () => Wt, ghi: () => Gt, Rdb: () => Yt, qNu: () => Vt, T0F: () => Kt, ohZ: () => Zt, _As: () => St, mlu: () => it, pq5: () => vr, Mfc: () => xt, MZM: () => wr, VNS: () => ce, oAs: () => xr, GuN: () => _r, qkk: () => rr, wve: () => nr, ci8: () => n, XPF: () => Cr, rz0: () => Or, ZnQ: () => Rr, vx3: () => Pe, N1y: () => We, sC3: () => Fr, TQC: () => Te, Lnu: () => or });
    /* @__PURE__ */ new Set(["EACCES", "EPERM", "ENOENT", "ENOTDIR", "EISDIR", "ELOOP", "ENAMETOOLONG"]);
    var o = r(37949), s = r(13807), i = r(55094);
    (0, o.h)("SimpleControlledExecManager"), (0, s.v5)("agent_exec.controlled.exec.duration_ms", { description: "Duration of controlled exec operations in milliseconds", labelNames: ["exec_case"] }), (0, s.Pu)("agent_exec.controlled.exec.success", { description: "Count of successful controlled exec operations", labelNames: ["exec_case"] }), (0, s.Pu)("agent_exec.controlled.exec.error", { description: "Count of failed controlled exec operations", labelNames: ["exec_case"] });
    Error;
    class a {
      constructor(e2, t2, r2) {
        this.exec = e2, this.deserializeArgs = t2, this.serializeResult = r2;
      }
      handle(e2, t2) {
        const r2 = this.deserializeArgs(t2);
        if (void 0 === r2) return;
        const { id: n2, args: o2 } = r2;
        return (async function* (r3) {
          const s2 = performance.now(), i2 = [], a2 = await r3.exec.execute(e2, o2, { execId: t2.execId, hookContextCollector: i2, deliverAgentStoreConflictNotices: true === t2.acceptHookAdditionalContexts }), l2 = r3.serializeResult(n2, a2);
          l2.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - s2)), i2.length > 0 && (l2.hookAdditionalContexts = i2), yield l2;
        })(this);
      }
    }
    class l {
      constructor(e2, t2, r2) {
        this.exec = e2, this.deserializeArgs = t2, this.serializeStream = r2;
      }
      handle(e2, t2) {
        const r2 = this.deserializeArgs(t2);
        if (void 0 === r2) return;
        const { id: n2, args: o2 } = r2;
        return (async function* (r3) {
          const s2 = performance.now(), a2 = [], l2 = r3.exec.execute(e2, o2, { execId: t2.execId, hookContextCollector: a2, deliverAgentStoreConflictNotices: true === t2.acceptHookAdditionalContexts });
          try {
            for await (const e3 of l2) {
              const t3 = r3.serializeStream(n2, e3);
              t3.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - s2)), yield t3;
            }
          } finally {
            const e3 = a2.filter((e4) => "agentStoreConflict" === e4.hookEventName);
            e3.length > 0 && (yield new i.yT({ id: n2, hookAdditionalContexts: e3 }));
          }
        })(this);
      }
    }
    var c = r(98875);
    async function u(e2) {
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
    var d = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, o2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (o2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        o2 && (n2 = function() {
          try {
            o2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, p = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, o2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === o2) return o2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var s2 = n2.dispose.call(n2.value);
              if (n2.async) return o2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else o2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === o2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const h = (0, o.h)("ExecutorResource"), m = (0, s.Pu)("agent_exec.hook_additional_context.delivered", { description: "Hook additional_context carriers drained into the caller collector", labelNames: ["hook_event_name"] });
    class f {
      constructor(e2, t2, r2) {
        this.execManager = e2, this.serializeArgs = t2, this.deserializeResult = r2;
      }
      async execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = d(n2, (0, c.VI)(e2.withName("ExecutorResource.execute")), false), s2 = o2.ctx;
          void 0 !== r2?.execId && o2.span.setAttribute("exec.id", r2.execId);
          const a2 = (0, c.mJ)(s2), l2 = a2 ? new i.Kg(a2) : void 0, p2 = this.execManager.createExecInstance(s2, (e3) => {
            const n3 = this.serializeArgs(e3, t2);
            return new i.Ye({ id: n3.id, message: n3.message, execId: r2?.execId, machineId: r2?.machineId, spanContext: l2, acceptHookAdditionalContexts: void 0 !== r2?.hookContextCollector });
          }), f2 = await u(p2);
          if (void 0 === f2) throw new Error("No exec result");
          let { firstItem: g2, rest: y2 } = f2;
          const v2 = (e3) => {
            if (void 0 !== r2?.hookContextCollector && e3.hookAdditionalContexts.length > 0) {
              r2.hookContextCollector.push(...e3.hookAdditionalContexts);
              for (const t3 of e3.hookAdditionalContexts) m.increment(s2, 1, { hook_event_name: t3.hookEventName });
            }
          };
          v2(g2);
          let w2 = this.deserializeResult(g2);
          for (; void 0 === w2; ) {
            const e3 = await u(y2);
            if (void 0 === e3) throw new Error("No result value");
            g2 = e3.firstItem, y2 = e3.rest, v2(g2), w2 = this.deserializeResult(g2);
          }
          return (async () => {
            try {
              for await (const e3 of y2) v2(e3);
            } catch (e3) {
              h.info(s2, "Ignoring exec stream shutdown during detached drain", { error: e3 });
            }
          })().catch(() => {
          }), w2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          p(n2);
        }
      }
    }
    class g {
      constructor(e2, t2, r2) {
        this.execManager = e2, this.serializeArgs = t2, this.deserializeStream = r2;
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = d(n2, (0, c.VI)(e2.withName("StreamExecutorResource.execute")), false).ctx, s2 = (0, c.mJ)(o2), a2 = s2 ? new i.Kg(s2) : void 0, l2 = this.execManager.createExecInstance(o2, (e3) => {
            const n3 = this.serializeArgs(e3, t2);
            return new i.Ye({ id: n3.id, message: n3.message, execId: r2?.execId, machineId: r2?.machineId, spanContext: a2, acceptHookAdditionalContexts: void 0 !== r2?.hookContextCollector || true === r2?.deliverAgentStoreConflictNotices });
          });
          for await (const e3 of l2) {
            void 0 !== r2?.hookContextCollector && e3.hookAdditionalContexts.length > 0 && r2.hookContextCollector.push(...e3.hookAdditionalContexts);
            const t3 = this.deserializeStream(e3);
            void 0 !== t3 && (yield t3);
          }
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          p(n2);
        }
      }
    }
    const y = "agent-store-conflict-executor", v = "agent-store-conflict-notice-executor", w = "background-shell-executor", b = "canvas-diagnostics-executor", _ = "computer-use-executor", S = "conversation-search-executor", x = "delete-executor", k = "diagnostics-executor", E = "fetch-executor", T = "force-background-shell-executor", C = "force-background-subagent-executor", I = "git-diff-executor", A = "grep-executor", P = "hook-executor", M = "list-mcp-resources-executor", R = "ls-executor", O = "mcp-allowlist-precheck-executor", D = "mcp-executor", N = "mcp-state-executor", F = "mini-swe-agent-bash-executor", L = "pi-bash-executor", U = "pi-edit-executor", B = "pi-find-executor", $ = "pi-grep-executor", q = "pi-ls-executor", j = "pi-read-executor", J = "pi-write-executor", z = "read-executor", H = "read-mcp-resource-executor", W = "record-screen-executor", G = "redacted-read-executor", Y = "request-context-executor", V = "shell-allowlist-precheck-executor", K = "shell-executor", Z = "shell-stream-executor", X = "smart-mode-classifier-executor", Q = "subagent-await-executor", ee = "subagent-executor", te = "web-fetch-allowlist-precheck-executor", re = "write-background-shell-input-executor", ne = "write-executor", oe = "@anysphere/agent-exec/resource/";
    function se(e2) {
      return /* @__PURE__ */ Symbol.for(`${oe}${e2}`);
    }
    function ie(e2, t2, r2) {
      return { name: e2, symbol: se(e2), remoteImplementation: t2, registerControlledImplementation: r2 };
    }
    class ae {
      constructor(e2, t2) {
        this.resourceEntries = /* @__PURE__ */ new Map(), this.remoteExecManager = e2, void 0 !== t2 && this.registerAll(t2);
      }
      register(e2) {
        this.resourceEntries.set(e2, e2.remoteImplementation(this.remoteExecManager));
      }
      set(e2, t2) {
        this.resourceEntries.set(e2, t2);
      }
      registerAll(e2) {
        for (const t2 of e2) this.register(t2);
      }
      get(e2) {
        return this.resourceEntries.get(e2);
      }
      entries() {
        return this.resourceEntries.entries();
      }
    }
    class le {
      constructor(e2, t2) {
        this.resource = e2, this.value = t2;
      }
    }
    function ce(e2, t2) {
      return [e2, t2];
    }
    class ue {
      constructor() {
        this.resources = /* @__PURE__ */ new Map();
      }
      register(e2, t2) {
        this.resources.set(e2.symbol, new le(e2, t2));
      }
      get(e2) {
        return this.resources.get(e2.symbol)?.value;
      }
      entries() {
        return Array.from(this.resources.values()).map((e2) => [e2.resource, e2.value]);
      }
    }
    class de {
      constructor(e2, t2) {
        this.baseAccessor = e2, this.localResources = /* @__PURE__ */ new Map();
        for (const [e3, r2] of t2) this.localResources.set(e3.symbol, { resource: e3, implementation: r2 });
      }
      get(e2) {
        const t2 = this.localResources.get(e2.symbol);
        return t2 ? t2.implementation : this.baseAccessor.get(e2);
      }
    }
    class pe {
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
    function he(e2) {
      return function(t2, r2) {
        return new i.Ye({ id: t2, message: { case: e2, value: r2 } });
      };
    }
    function me(e2) {
      return (t2) => {
        if (t2.message.case === e2) return t2.message.value;
      };
    }
    function fe(e2) {
      return function(t2, r2) {
        const n2 = { case: e2, value: r2 };
        return new i.yT({ id: t2, message: n2 });
      };
    }
    function ge(e2) {
      return function(t2) {
        if (t2.message.case === e2) return { id: t2.id, args: t2.message.value };
      };
    }
    const ye = ie(y, (e2) => new f(e2, he("agentStoreConflictArgs"), me("agentStoreConflictResult")), (e2, t2) => {
      t2.register(new a(e2, ge("agentStoreConflictArgs"), fe("agentStoreConflictResult")));
    });
    /* @__PURE__ */ new Set(["write_conflict", "create_conflict", "truncate_conflict_failed", "conflict_fallback_failed", "quota_exceeded", "gap"]);
    class ve {
      async execute(e2, t2) {
        return "ack" === t2.op ? { kind: "acked", count: 0 } : "release" === t2.op ? { kind: "released", count: 0 } : "noteDeferredEagerWrittenPaths" === t2.op ? { kind: "noted", count: 0 } : { kind: "not-applicable" };
      }
    }
    const we = ie(v, (e2) => new ve(), (e2, t2) => {
    });
    async function be(e2, t2, r2, n2) {
      return await e2.execute(t2, { op: "syncAndPeek", ...void 0 !== r2?.conversationId ? { conversationId: r2.conversationId } : {}, ...void 0 !== r2?.writtenPaths ? { writtenPaths: r2.writtenPaths } : {}, ...void 0 !== r2?.timeoutMs ? { timeoutMs: r2.timeoutMs } : {}, ...true === r2?.eager ? { eager: true } : {} }, n2);
    }
    async function _e(e2, t2, r2, n2) {
      return await e2.execute(t2, { op: "peek", ...void 0 !== r2?.conversationId ? { conversationId: r2.conversationId } : {} }, n2);
    }
    async function Se(e2, t2, r2, n2, o2) {
      0 !== r2.length && await e2.execute(t2, { op: "ack", eventIds: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, o2);
    }
    async function xe(e2, t2, r2, n2, o2) {
      0 !== r2.length && await e2.execute(t2, { op: "release", eventIds: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, o2);
    }
    async function ke(e2, t2, r2, n2, o2) {
      0 !== r2.length && await e2.execute(t2, { op: "noteDeferredEagerWrittenPaths", writtenPaths: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, o2);
    }
    const Ee = ie(w, (e2) => new f(e2, he("backgroundShellSpawnArgs"), me("backgroundShellSpawnResult")), (e2, t2) => {
      t2.register(new a(e2, ge("backgroundShellSpawnArgs"), fe("backgroundShellSpawnResult")));
    }), Te = ie(re, (e2) => new f(e2, he("writeShellStdinArgs"), me("writeShellStdinResult")), (e2, t2) => {
      t2.register(new a(e2, ge("writeShellStdinArgs"), fe("writeShellStdinResult")));
    });
    function Ce(e2) {
      const t2 = {};
      return "string" == typeof e2.title && e2.title.trim().length > 0 && (t2.title = e2.title), "string" == typeof e2.cwd && e2.cwd.trim().length > 0 && (t2.cwd = e2.cwd), "number" == typeof e2.startTimeMs && Number.isFinite(e2.startTimeMs) && e2.startTimeMs > 0 && (t2.startTimeMs = String(Math.floor(e2.startTimeMs))), Object.keys(t2).length > 0 ? t2 : void 0;
    }
    const Ie = "local";
    const Ae = ie(b, (e2) => new f(e2, he("canvasDiagnosticsArgs"), me("canvasDiagnosticsResult")), (e2, t2) => {
      t2.register(new a(e2, ge("canvasDiagnosticsArgs"), fe("canvasDiagnosticsResult")));
    });
    Error;
    function Pe(e2) {
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
    const Me = ie(_, (e2) => new f(e2, he("computerUseArgs"), me("computerUseResult")), (e2, t2) => {
      t2.register(new a(e2, ge("computerUseArgs"), fe("computerUseResult")));
    }), Re = ie(S, (e2) => new f(e2, he("conversationSearchArgs"), me("conversationSearchResult")), (e2, t2) => {
      t2.register(new a(e2, ge("conversationSearchArgs"), fe("conversationSearchResult")));
    }), Oe = ie(x, (e2) => new f(e2, he("deleteArgs"), me("deleteResult")), (e2, t2) => {
      t2.register(new a(e2, ge("deleteArgs"), fe("deleteResult")));
    }), De = ie(k, (e2) => new f(e2, he("diagnosticsArgs"), me("diagnosticsResult")), (e2, t2) => {
      t2.register(new a(e2, ge("diagnosticsArgs"), fe("diagnosticsResult")));
    });
    var Ne = r(33002);
    (0, Ne.cF)(/* @__PURE__ */ Symbol("execConversationId"), void 0), (0, Ne.cF)(/* @__PURE__ */ Symbol("execRequestId"), void 0), (0, Ne.cF)(/* @__PURE__ */ Symbol("execBrowserOperationSource"), void 0);
    const Fe = ie(E, (e2) => new f(e2, he("fetchArgs"), me("fetchResult")), (e2, t2) => {
      t2.register(new a(e2, ge("fetchArgs"), fe("fetchResult")));
    }), Le = ie(I, (e2) => new f(e2, he("gitDiffRequest"), me("gitDiffResponse")), (e2, t2) => {
      t2.register(new a(e2, ge("gitDiffRequest"), fe("gitDiffResponse")));
    }), Ue = ie(A, (e2) => new f(e2, he("grepArgs"), me("grepResult")), (e2, t2) => {
      t2.register(new a(e2, ge("grepArgs"), fe("grepResult")));
    });
    r(307);
    const Be = ie(P, (e2) => new f(e2, he("executeHookArgs"), me("executeHookResult")), (e2, t2) => {
      t2.register(new a(e2, ge("executeHookArgs"), fe("executeHookResult")));
    });
    (0, Ne.cF)(/* @__PURE__ */ Symbol("execHookConversationId"), void 0), (0, Ne.cF)(/* @__PURE__ */ Symbol("execHookGenerationId"), void 0), (0, Ne.cF)(/* @__PURE__ */ Symbol("execHookModel"), void 0);
    const $e = (0, Ne.cF)(/* @__PURE__ */ Symbol("execHookWorkspaceRoots"), void 0), qe = ie(R, (e2) => new f(e2, he("lsArgs"), me("lsResult")), (e2, t2) => {
      t2.register(new a(e2, ge("lsArgs"), fe("lsResult")));
    }), je = "cursor-ide-browser", Je = "cursor-dev-control", ze = "custom-user-tools", He = /* @__PURE__ */ new Set(["cursor-app-control", "cursor-backend-control", "cursor-browser-extension", je, Je, ze, "fsd", "cursor-subscriptions", "cursor-cloud", "suggestions", "Cursor Slack Tools", "Cursor Automation Tools"]);
    function We(e2) {
      return !He.has(e2);
    }
    const Ge = "cursor", Ye = /* @__PURE__ */ new Set([Je, je]);
    function Ve(e2) {
      if (void 0 !== e2 && 0 !== Object.keys(e2).length) try {
        return JSON.stringify(e2);
      } catch {
        return;
      }
    }
    function Ke(e2) {
      return { name: e2.toolName, description: e2.description, arguments: e2.inputSchema, outputSchema: e2.outputSchema, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId };
    }
    function Ze(e2) {
      if (void 0 !== e2) try {
        return JSON.parse(e2);
      } catch {
        return;
      }
    }
    function Xe(e2) {
      return Ze(e2.inputSchemaJson) ?? e2.inputSchema?.toJson();
    }
    var Qe;
    function et(e2) {
      return void 0 === e2 || void 0 === e2.serverIdentifiers;
    }
    function tt(...e2) {
      const [t2, r2] = e2;
      return e2.length < 2 ? t2 : et(r2) ? { serverIdentifiers: void 0, reason: t2?.reason ?? r2?.reason } : void 0 === t2 ? r2 : et(t2) ? { serverIdentifiers: void 0, reason: t2.reason ?? r2?.reason } : { serverIdentifiers: [.../* @__PURE__ */ new Set([...t2.serverIdentifiers ?? [], ...r2?.serverIdentifiers ?? []])], reason: t2.reason ?? r2?.reason };
    }
    function rt(e2) {
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
    function nt(e2) {
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
    })(Qe || (Qe = {}));
    const ot = ie(D, (e2) => new f(e2, he("mcpArgs"), me("mcpResult")), (e2, t2) => {
      t2.register(new a(e2, ge("mcpArgs"), fe("mcpResult")));
    }), st = ie(M, (e2) => new f(e2, he("listMcpResourcesExecArgs"), me("listMcpResourcesExecResult")), (e2, t2) => {
      t2.register(new a(e2, ge("listMcpResourcesExecArgs"), fe("listMcpResourcesExecResult")));
    }), it = ie(H, (e2) => new f(e2, he("readMcpResourceExecArgs"), me("readMcpResourceExecResult")), (e2, t2) => {
      t2.register(new a(e2, ge("readMcpResourceExecArgs"), fe("readMcpResourceExecResult")));
    }), at = ie(N, (e2) => new f(e2, he("mcpStateExecArgs"), me("mcpStateExecResult")), (e2, t2) => {
      t2.register(new a(e2, ge("mcpStateExecArgs"), fe("mcpStateExecResult")));
    });
    var lt = r(88107);
    const ct = ie(O, (e2) => new f(e2, he("mcpAllowlistPrecheckArgs"), me("mcpAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new a(e2, ge("mcpAllowlistPrecheckArgs"), fe("mcpAllowlistPrecheckResult")));
    }), ut = "mcps", dt = "tools";
    function pt(e2) {
      try {
        const t2 = JSON.parse(e2);
        return "string" == typeof t2.name && t2.name.length > 0 ? t2.name : "string" == typeof t2.toolName && t2.toolName.length > 0 ? t2.toolName : void 0;
      } catch {
        return;
      }
    }
    var ht = r(20941), mt = r(11197), ft = r(88623), gt = r(90066), yt = r(65716), vt = r(36038);
    const wt = new TextEncoder();
    async function bt(e2) {
      const t2 = wt.encode(e2), r2 = await crypto.subtle.digest("SHA-256", t2);
      return { sha256: [...new Uint8Array(r2)].map((e3) => e3.toString(16).padStart(2, "0")).join(""), bytes: t2.byteLength };
    }
    class _t {
      constructor(e2) {
        this.inner = e2;
      }
      async execute(e2, t2, r2) {
        if (true !== t2.digestOnly) return this.inner.execute(e2, t2, r2);
        const n2 = new ft.a2({ ...t2, digestOnly: void 0 });
        return (async function(e3) {
          if ("success" !== e3.result.case) return e3;
          const t3 = e3.result.value;
          if ("content" !== t3.output.case) return e3;
          const { sha256: r3, bytes: n3 } = await bt(t3.output.value);
          return new ft.sV({ result: { case: "success", value: new ft.mE({ ...t3, output: { case: void 0 }, outputBlobId: void 0, sha256: r3, sizeBytes: BigInt(n3) }) } });
        })(await this.inner.execute(e2, n2, r2));
      }
    }
    const St = ie(z, (e2) => new f(e2, he("readArgs"), me("readResult")), (e2, t2) => {
      t2.register(new a(e2, ge("readArgs"), fe("readResult")));
    }), xt = ie(G, (e2) => new f(e2, he("redactedReadArgs"), me("redactedReadResult")), (e2, t2) => {
      t2.register(new a(e2, ge("redactedReadArgs"), fe("redactedReadResult")));
    }), kt = "$file:", Et = ht.p, Tt = 16777216, Ct = 4;
    function It(e2) {
      if ("string" != typeof e2 || !e2.startsWith(kt)) return;
      const t2 = e2.slice(kt.length);
      return (0, gt.Z1)(t2) ? t2 : void 0;
    }
    function At(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = (e3) => {
        const n2 = It(e3);
        void 0 !== n2 ? t2.add(n2) : Array.isArray(e3) ? e3.forEach(r2) : null !== e3 && "object" == typeof e3 && Object.values(e3).forEach(r2);
      };
      return r2(e2), [...t2];
    }
    const Pt = (0, s.Pu)("mcp.symbolic_args.expansion", { description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary", labelNames: ["route", "outcome"] }), Mt = (0, s.v5)("mcp.symbolic_args.bytes", { description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments", labelNames: ["route"] }), Rt = (0, s.Pu)("mcp.symbolic_args.describe", { description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)", labelNames: ["source"] }), Ot = (0, s.v5)("mcp.symbolic_args.paths", { description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call", labelNames: ["route"] });
    function Dt(e2, t2, r2) {
      return { kind: e2, message: `Could not resolve the symbolic argument "${kt}${t2}": ${r2} A string argument of the form "${kt}/absolute/path" is replaced with that file's contents before the tool runs; pass the literal text instead if you did not intend that.` };
    }
    class Nt extends Error {
      constructor(e2) {
        super(e2.message), this.failure = e2;
      }
    }
    async function Ft(e2, t2, r2, n2, o2, { maxFileBytes: s2 = Et, maxTotalBytes: i2 = Tt }) {
      if (t2.length > Ct) throw new Nt(Dt("too_many", t2[Ct] ?? "", `at most ${Ct} symbolic arguments may be used in one call (${t2.length} given). Split the call or pass paths to tools that accept them.`));
      const a2 = r2();
      if (void 0 === a2) throw new Nt(Dt("no_read_executor", t2[0] ?? "", "this environment cannot read files on behalf of a tool call."));
      const l2 = await (0, yt.xb)(t2, (t3) => (async function(e3, t4, r3, n3, o3, s3) {
        const i3 = await t4.execute(e3, new ft.a2({ path: r3, toolCallId: n3, ...s3 ? { digestOnly: true } : {} }));
        switch (i3.result.case) {
          case "success": {
            const t5 = i3.result.value, n4 = s3 && void 0 !== t5.sha256 && void 0 !== t5.sizeBytes ? { sha256: t5.sha256, bytes: Number(t5.sizeBytes) } : void 0;
            if (void 0 === n4 && "content" !== t5.output.case) throw new Nt(Dt("not_text", r3, "the file is not a text file."));
            if (s3 && (Rt.increment(e3, 1, { source: void 0 !== n4 ? "vm_digest" : "outdated_executor" }), void 0 === n4)) throw new Nt(Dt("outdated_executor", r3, "the computer that would run this tool has an older tool runner that cannot substitute files. Read the file and pass its contents instead."));
            const a3 = "content" === t5.output.case ? t5.output.value : void 0, { sha256: l3, bytes: c3 } = n4 ?? await bt(a3 ?? "");
            if (t5.truncated || c3 > o3) throw new Nt(Dt("too_large", r3, `the file is too large to inline (${Number(t5.fileSize) || c3} bytes; at most ${o3} bytes per file may be substituted). Pass the path to a tool that accepts one, or read a range of it.`));
            return { content: a3, bytes: c3, sha256: l3 };
          }
          case "fileNotFound":
            throw new Nt(Dt("not_found", r3, "the file does not exist."));
          case "permissionDenied":
            throw new Nt(Dt("permission_denied", r3, "reading it was not permitted."));
          case "rejected":
            throw new Nt(Dt("rejected", r3, `${i3.result.value.reason || "the read was rejected"}. Only files the Read tool can read without approval can be substituted; read it with Read instead.`));
          case "invalidFile":
            throw new Nt(Dt("not_text", r3, "the file cannot be read as text."));
          case "error":
            throw new Nt(Dt("read_error", r3, i3.result.value.error));
          default:
            throw new Nt(Dt("read_error", r3, "the read returned no result."));
        }
      })(e2, a2, t3, n2, s2, o2), { max: Ct });
      let c2 = 0;
      for (const [e3, r3] of l2) if (c2 += r3.bytes, c2 > i2) throw new Nt(Dt("over_budget", e3, `together the ${t2.length} symbolic arguments exceed the ${i2} bytes that may be substituted per call. Pass paths to tools that accept them instead.`));
      return l2;
    }
    function Lt(e2, t2) {
      return e2 instanceof Nt ? e2.failure : Dt("read_error", t2, e2 instanceof Error ? e2.message : String(e2));
    }
    async function Ut(e2, { paths: t2, getReadExecutor: r2, toolCallId: n2, ...o2 }) {
      const s2 = [...new Set(t2)];
      try {
        const t3 = await Ft(e2, s2, r2, n2, true, o2);
        return Pt.increment(e2, 1, { route: "review", outcome: "described" }), { kind: "described", descriptors: s2.map((e3) => {
          const r3 = t3.get(e3);
          return new mt.n({ path: e3, sha256: r3?.sha256 ?? "", sizeBytes: BigInt(r3?.bytes ?? 0) });
        }) };
      } catch (t3) {
        const r3 = Lt(t3, s2[0] ?? "");
        return Pt.increment(e2, 1, { route: "review", outcome: r3.kind }), { kind: "failed", failure: r3 };
      }
    }
    async function Bt(e2, t2, { route: r2, getReadExecutor: n2, ...o2 }) {
      if (0 === t2.symbolicPathArguments.length) return { kind: "none" };
      const s2 = new Map(t2.symbolicPathArguments.map((e3) => [e3.path, e3])), i2 = [...s2.keys()], a2 = (t3) => (Pt.increment(e2, 1, { route: r2, outcome: t3.kind }), { kind: "failed", failure: t3, result: new mt.iz({ result: { case: "error", value: new mt.Nh({ error: t3.message }) } }) });
      let l2;
      try {
        l2 = await Ft(e2, i2, n2, t2.toolCallId, false, o2);
      } catch (e3) {
        return a2(Lt(e3, i2[0] ?? ""));
      }
      let c2 = 0;
      for (const [e3, t3] of l2) {
        c2 += t3.bytes;
        const r3 = s2.get(e3);
        if (r3?.sha256 !== t3.sha256) return a2(Dt("content_changed", e3, `the file changed after the call was reviewed (${r3?.sizeBytes ?? 0} bytes then, ${t3.bytes} bytes now), so its new contents were not sent. Re-run the call to review the current contents.`));
      }
      const u2 = new Map([...l2].map(([e3, t3]) => [e3, t3.content ?? ""])), d2 = (function(e3, t3) {
        const r3 = (e4) => {
          const n3 = It(e4);
          return void 0 !== n3 ? t3.get(n3) ?? e4 : Array.isArray(e4) ? e4.map(r3) : null !== e4 && "object" == typeof e4 ? Object.fromEntries(Object.entries(e4).map(([e5, t4]) => [e5, r3(t4)])) : e4;
        };
        return Object.fromEntries(Object.entries(e3).map(([e4, t4]) => [e4, r3(t4)]));
      })(Object.fromEntries(Object.entries(t2.args).map(([e3, t3]) => [e3, t3.toJson()])), u2), p2 = t2.clone();
      return p2.args = Object.fromEntries(Object.entries(d2).map(([e3, t3]) => [e3, vt.Value.fromJson(t3)])), p2.symbolicPathArguments = [], Pt.increment(e2, 1, { route: r2, outcome: "expanded" }), Mt.record(e2, c2, { route: r2 }), Ot.record(e2, i2.length, { route: r2 }), { kind: "expanded", expansion: { args: p2, files: [...l2].map(([e3, t3]) => ({ path: e3, bytes: t3.bytes })), paths: i2.length, bytes: c2 } };
    }
    const $t = /\b413\b|payload too large|request entity too large|body.*too large|too large.*body|ECONNRESET|EPIPE|socket hang up|max(?:imum)? (?:body|payload|request|content) (?:size|length)/i;
    function qt(e2, t2, r2, n2) {
      return $t.test(t2) ? (Pt.increment(e2, 1, { route: n2, outcome: "server_rejected_body" }), `${t2}

The request carried ${r2.bytes} bytes of file contents substituted from ${r2.paths} "${kt}/abs/path" argument(s), and the server appears to have rejected the request body as too large. Do not retry the same call: pass a smaller file or a range of it, or use a tool that accepts a path or upload instead.`) : t2;
    }
    function jt(e2) {
      return e2.files.map((e3) => `"${kt}${e3.path}" was replaced with the contents of ${e3.path} (${e3.bytes} bytes) before the call.`).join("\n");
    }
    class Jt {
      constructor(e2, t2) {
        this.inner = e2, this.getReadExecutor = t2;
      }
      isBackendRouted(e2) {
        return this.inner.isBackendRouted?.(e2) ?? false;
      }
      async execute(e2, t2, r2) {
        if (0 === t2.symbolicPathArguments.length) return this.inner.execute(e2, t2, r2);
        const n2 = await Bt(e2, t2, { route: "local", getReadExecutor: this.getReadExecutor });
        if ("none" === n2.kind) return this.inner.execute(e2, t2, r2);
        if ("failed" === n2.kind) return n2.result;
        let o2;
        try {
          o2 = await this.inner.execute(e2, n2.expansion.args, r2);
        } catch (t3) {
          throw t3 instanceof Error && (t3.message = qt(e2, t3.message, n2.expansion, "local")), t3;
        }
        return (function(e3, t3, r3, n3) {
          const o3 = t3.clone();
          return "success" === o3.result.case ? o3.result.value.content.push(new mt._Z({ content: { case: "text", value: new mt.zN({ text: jt(r3) }) } })) : "error" === o3.result.case && (o3.result.value.error = qt(e3, o3.result.value.error, r3, n3)), o3;
        })(e2, o2, n2.expansion, "local");
      }
    }
    const zt = ie(F, (e2) => new f(e2, he("miniSweAgentBashArgs"), me("miniSweAgentBashResult")), (e2, t2) => {
      t2.register(new a(e2, ge("miniSweAgentBashArgs"), fe("miniSweAgentBashResult")));
    }), Ht = ie(L, (e2) => new f(e2, he("piBashArgs"), me("piBashResult")), (e2, t2) => {
      t2.register(new a(e2, ge("piBashArgs"), fe("piBashResult")));
    }), Wt = ie(U, (e2) => new f(e2, he("piEditArgs"), me("piEditResult")), (e2, t2) => {
      t2.register(new a(e2, ge("piEditArgs"), fe("piEditResult")));
    }), Gt = ie(B, (e2) => new f(e2, he("piFindArgs"), me("piFindResult")), (e2, t2) => {
      t2.register(new a(e2, ge("piFindArgs"), fe("piFindResult")));
    }), Yt = ie($, (e2) => new f(e2, he("piGrepArgs"), me("piGrepResult")), (e2, t2) => {
      t2.register(new a(e2, ge("piGrepArgs"), fe("piGrepResult")));
    }), Vt = ie(q, (e2) => new f(e2, he("piLsArgs"), me("piLsResult")), (e2, t2) => {
      t2.register(new a(e2, ge("piLsArgs"), fe("piLsResult")));
    }), Kt = ie(j, (e2) => new f(e2, he("piReadArgs"), me("piReadResult")), (e2, t2) => {
      t2.register(new a(e2, ge("piReadArgs"), fe("piReadResult")));
    }), Zt = ie(J, (e2) => new f(e2, he("piWriteArgs"), me("piWriteResult")), (e2, t2) => {
      t2.register(new a(e2, ge("piWriteArgs"), fe("piWriteResult")));
    });
    var Xt = r(44498), Qt = r(19260), er = r(62671), tr = r(19950);
    const rr = ie(K, (e2) => new f(e2, he("shellArgs"), me("shellResult")), (e2, t2) => {
      t2.register(new a(e2, ge("shellArgs"), fe("shellResult")));
    }), nr = ie(Z, (e2) => new g(e2, he("shellStreamArgs"), me("shellStream")), (e2, t2) => {
      t2.register(new l(e2, ge("shellStreamArgs"), fe("shellStream")));
    }), or = ie(ne, (e2) => new f(e2, he("writeArgs"), me("writeResult")), (e2, t2) => {
      t2.register(new a(e2, ge("writeArgs"), fe("writeResult")));
    }), sr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts write operations.", ir = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts shell, write, delete, and MCP operations.";
    function ar(e2, t2) {
      return new er.jn({ command: t2.command ?? "", workingDirectory: t2.workingDirectory ?? "", error: e2, isReadonly: true });
    }
    function lr(e2) {
      return { execute: async (t2, r2) => new er.W4({ result: { case: "permissionDenied", value: ar(e2, r2) } }) };
    }
    function cr(e2) {
      return { async *execute(t2, r2) {
        yield new er.FI({ event: { case: "permissionDenied", value: ar(e2, r2) } });
      } };
    }
    function ur(e2) {
      return { execute: async (t2, r2) => new Xt.Lt({ result: { case: "permissionDenied", value: ar(e2, r2) } }) };
    }
    function dr(e2) {
      return { execute: async (t2, r2) => new tr.v3({ result: { case: "permissionDenied", value: new tr.U7({ path: r2.path, error: e2, isReadonly: true }) } }) };
    }
    function pr(e2) {
      return { execute: async (t2, r2) => new Qt.Pi({ result: { case: "permissionDenied", value: new Qt.QG({ path: r2.path, clientVisibleError: e2, isReadonly: true }) } }) };
    }
    function hr(e2) {
      return { execute: async (t2, r2) => new mt.iz({ result: { case: "permissionDenied", value: new mt.HQ({ error: `${e2} Tool: ${r2.name}`, isReadonly: true }) } }) };
    }
    function mr(e2) {
      return { execute: async (t2, r2) => new Xt.nt({ result: { case: "error", value: new Xt.Gv({ error: e2 }) } }) };
    }
    function fr(e2) {
      const t2 = [[or, dr(e2.errorMessage)], [Oe, pr(e2.errorMessage)], [ot, hr(e2.errorMessage)]];
      return e2.wrapShell && t2.push([rr, lr(e2.errorMessage)], [nr, cr(e2.errorMessage)], [Ee, ur(e2.errorMessage)]), e2.includeWriteBackgroundShellStdin && t2.push([Te, mr(e2.errorMessage)]), t2;
    }
    function gr(e2, t2) {
      return new de(e2, fr({ errorMessage: sr, wrapShell: t2, includeWriteBackgroundShellStdin: false }));
    }
    function yr(e2) {
      return new pe(e2, fr({ errorMessage: ir, wrapShell: true, includeWriteBackgroundShellStdin: true }));
    }
    const vr = ie(W, (e2) => new f(e2, he("recordScreenArgs"), me("recordScreenResult")), (e2, t2) => {
      t2.register(new a(e2, ge("recordScreenArgs"), fe("recordScreenResult")));
    }), wr = ie(Y, (e2) => new f(e2, he("requestContextArgs"), me("requestContextResult")), (e2, t2) => {
      t2.register(new a(e2, ge("requestContextArgs"), fe("requestContextResult")));
    });
    var br = r(82589);
    const _r = ie(V, (e2) => new f(e2, he("shellAllowlistPrecheckArgs"), me("shellAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new a(e2, ge("shellAllowlistPrecheckArgs"), fe("shellAllowlistPrecheckResult")));
    }), Sr = ie(T, (e2) => new f(e2, he("forceBackgroundShellArgs"), me("forceBackgroundShellResult")), (e2, t2) => {
      t2.register(new a(e2, ge("forceBackgroundShellArgs"), fe("forceBackgroundShellResult")));
    });
    function xr(e2, t2) {
      e2.hookApprovalRequirement = void 0 !== t2 ? new er.In(t2) : void 0;
    }
    function kr(e2) {
      return e2.hookApprovalRequirement;
    }
    function Er(e2) {
      return new er.In({ kind: er.b.FORCE_PROMPT, reason: e2 });
    }
    var Tr = r(18846);
    const Cr = ie(X, (e2) => new f(e2, he("smartModeClassifierArgs"), me("smartModeClassifierResult")), (e2, t2) => {
      t2.register(new a(e2, ge("smartModeClassifierArgs"), fe("smartModeClassifierResult")));
    });
    var Ir = r(12544);
    const Ar = "Sub-agent is currently running. You may send the follow-up message when it has completed.", Pr = (0, Ne.cF)(/* @__PURE__ */ Symbol("pendingSubagentReplay"), void 0);
    const Mr = "If you intended to interrupt this agent, you may retry with `interrupt` set to true";
    Error;
    const Rr = ie(ee, (e2) => new f(e2, he("subagentArgs"), me("subagentResult")), (e2, t2) => {
      t2.register(new a(e2, ge("subagentArgs"), fe("subagentResult")));
    }), Or = ie(Q, (e2) => new f(e2, he("subagentAwaitArgs"), me("subagentAwaitResult")), (e2, t2) => {
      t2.register(new a(e2, ge("subagentAwaitArgs"), fe("subagentAwaitResult")));
    }), Dr = ie(C, (e2) => new f(e2, he("forceBackgroundSubagentArgs"), me("forceBackgroundSubagentResult")), (e2, t2) => {
      t2.register(new a(e2, ge("forceBackgroundSubagentArgs"), fe("forceBackgroundSubagentResult")));
    });
    var Nr = r(83508);
    const Fr = ie(te, (e2) => new f(e2, he("webFetchAllowlistPrecheckArgs"), me("webFetchAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new a(e2, ge("webFetchAllowlistPrecheckArgs"), fe("webFetchAllowlistPrecheckResult")));
    });
  }