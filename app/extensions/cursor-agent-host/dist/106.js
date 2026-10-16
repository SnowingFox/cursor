"use strict";
exports.id = 106, exports.ids = [106], exports.modules = { 9106: (e, t, o) => {
  o.d(t, { createIdeObservabilityActivate: () => R });
  var r = o(75088), s = o(37949), n = o(33002), a = o(98875), i = o(76849), c = o(46144), l = o(91398), d = o(14521), u = o(30306), m = o(28144), p = o(82987);
  const h = (0, c.v5)("vscode.agent_exec.event_loop_delay_ms", { description: "Event loop delay in milliseconds" }), g = (0, c.wt)("vscode.agent_exec.event_loop_delay_min_ms", { description: "Minimum event loop delay in milliseconds" }), w = (0, c.wt)("vscode.agent_exec.event_loop_delay_max_ms", { description: "Maximum event loop delay in milliseconds" }), v = (0, c.wt)("vscode.agent_exec.event_loop_delay_mean_ms", { description: "Mean event loop delay in milliseconds" }), y = (0, c.wt)("vscode.agent_exec.memory_heap_used_mb", { description: "V8 heap used memory in megabytes" }), _ = (0, c.wt)("vscode.agent_exec.memory_heap_total_mb", { description: "V8 heap total memory in megabytes" }), f = (0, c.wt)("vscode.agent_exec.memory_rss_mb", { description: "Resident set size memory in megabytes" }), b = (0, c.wt)("vscode.agent_exec.memory_external_mb", { description: "External memory usage in megabytes" }), M = (0, c.wt)("vscode.agent_exec.memory_array_buffers_mb", { description: "ArrayBuffers memory usage in megabytes" }), x = (0, c.wt)("vscode.agent_exec.cpu_user_percent", { description: "CPU user time percentage" }), C = (0, c.wt)("vscode.agent_exec.cpu_system_percent", { description: "CPU system time percentage" }), k = 1048576;
  function E(e2) {
    return Number.isFinite(e2) ? e2 / 1e6 : 0;
  }
  class S {
    constructor(e2 = () => p.monitorEventLoopDelay({ resolution: 20 })) {
      this.createMonitor = e2;
    }
    start() {
      if (void 0 !== this.monitor) throw new Error("Event-loop delay measurement is already running");
      this.monitor = this.createMonitor(), this.monitor.enable();
    }
    finish() {
      const e2 = this.monitor;
      if (void 0 === e2) throw new Error("Event-loop delay measurement is not running");
      return this.monitor = void 0, e2.disable(), { maxMs: E(e2.max), meanMs: E(e2.mean), p95Ms: E(e2.percentile(95)) };
    }
    dispose() {
      this.monitor?.disable(), this.monitor = void 0;
    }
  }
  class L {
    constructor(e2, t2 = 1e4) {
      this.intervalId = null, this.lastCpuUsage = null, this.lastCpuTime = 0, this.getContext = e2, this.intervalMs = t2, this.eventLoopMonitor = p.monitorEventLoopDelay({ resolution: 20 });
    }
    start() {
      if (null === this.intervalId) {
        this.eventLoopMonitor.enable();
        try {
          this.lastCpuUsage = process.cpuUsage(), this.lastCpuTime = Date.now(), this.collectMetrics(), this.intervalId = setInterval(() => {
            this.collectMetrics();
          }, this.intervalMs);
        } catch (e2) {
          throw this.stop(), e2;
        }
      }
    }
    stop() {
      null !== this.intervalId && (clearInterval(this.intervalId), this.intervalId = null), this.eventLoopMonitor.disable();
    }
    collectMetrics() {
      const e2 = this.getContext();
      this.collectEventLoopMetrics(e2), this.collectMemoryMetrics(e2), this.collectCpuMetrics(e2);
    }
    collectEventLoopMetrics(e2) {
      h.histogram(e2, E(this.eventLoopMonitor.mean)), g.gauge(e2, E(this.eventLoopMonitor.min)), w.gauge(e2, E(this.eventLoopMonitor.max)), v.gauge(e2, E(this.eventLoopMonitor.mean)), this.eventLoopMonitor.reset();
    }
    collectMemoryMetrics(e2) {
      const t2 = process.memoryUsage();
      y.gauge(e2, t2.heapUsed / k), _.gauge(e2, t2.heapTotal / k), f.gauge(e2, t2.rss / k), b.gauge(e2, t2.external / k), M.gauge(e2, t2.arrayBuffers / k);
    }
    collectCpuMetrics(e2) {
      const t2 = process.cpuUsage(), o2 = Date.now();
      if (null !== this.lastCpuUsage) {
        const r2 = 1e3 * (o2 - this.lastCpuTime), s2 = (t2.user - this.lastCpuUsage.user) / r2 * 100, n2 = (t2.system - this.lastCpuUsage.system) / r2 * 100;
        x.gauge(e2, s2), C.gauge(e2, n2);
      }
      this.lastCpuUsage = t2, this.lastCpuTime = o2;
    }
  }
  var $ = o(91105);
  const U = "ripgrep_invocation_monitor", D = "ripgrep_invocation_monitor_config", I = { windowMs: 1e4, threshold: 50, maxRecords: 100, cooldownMs: 3e5, reportToSentry: true };
  async function T(e2, t2) {
    const o2 = () => true === t2?.aborted;
    let r2 = false;
    try {
      r2 = await l.cursor.checkFeatureGate(U);
    } catch {
      r2 = false;
    }
    if (!r2 || o2()) return;
    let s2 = I;
    try {
      const e3 = await l.cursor.getDynamicConfigValue(D);
      e3 && (s2 = { windowMs: e3.window_ms ?? I.windowMs, threshold: e3.threshold ?? I.threshold, maxRecords: e3.max_records ?? I.maxRecords, cooldownMs: e3.cooldown_ms ?? I.cooldownMs, reportToSentry: e3.report_to_sentry ?? I.reportToSentry });
    } catch {
      s2 = I;
    }
    if (o2()) return;
    const n2 = [];
    let a2 = 0;
    if (o2()) return;
    (0, $.o9_)((t3) => {
      try {
        n2.push(t3);
        const o3 = Math.max(1, s2.maxRecords, s2.threshold);
        n2.length > o3 && n2.splice(0, n2.length - o3);
        const r3 = t3.timestamp, i3 = r3 - s2.windowMs;
        let c2 = 0;
        for (let e3 = n2.length - 1; e3 >= 0 && n2[e3].timestamp >= i3; e3--) c2++;
        if (c2 < s2.threshold) return;
        if (!s2.reportToSentry) return;
        if (r3 - a2 < s2.cooldownMs) return;
        a2 = r3, ((t4, o4) => {
          const r4 = o4 - s2.windowMs, a3 = n2.filter((e3) => e3.timestamp >= r4), i4 = {}, c3 = {};
          for (const e3 of a3) i4[e3.source] = (i4[e3.source] ?? 0) + 1, c3[e3.mode] = (c3[e3.mode] ?? 0) + 1;
          const d2 = Object.entries(i4).sort((e3, t5) => t5[1] - e3[1])[0]?.[0] ?? "unknown", u2 = a3.length > 0 ? a3[0].timestamp : o4, m2 = s2.windowMs > 0 ? t4 / s2.windowMs * 1e3 : 0;
          try {
            l.cursor.captureException(new Error(`Excessive ripgrep invocations (agent-exec): ${t4} spawns in ${s2.windowMs}ms`), { client_error_type: "ripgrep_invocation_storm", force_upload: "forced", top_source: d2, "event.process": "extension-host" }, { level: "warning", fingerprint: ["ripgrep-invocation-storm", "agent-exec", d2], extra: { windowCount: t4, windowMs: s2.windowMs, threshold: s2.threshold, maxRecords: s2.maxRecords, bufferSize: n2.length, distinctSources: Object.keys(i4).length, windowSpanMs: o4 - u2, ratePerSec: m2.toFixed(1), sourceCounts: JSON.stringify(i4), modeCounts: JSON.stringify(c3) }, jsonAttachments: [{ filename: "ripgrep-invocations.json", json: JSON.stringify({ schemaVersion: 1, description: "Most recent ripgrep spawns from the agent-exec paths (agent grep/glob tool + ripwalk) before the storm threshold was crossed. No raw query text or paths are included.", windowMs: s2.windowMs, threshold: s2.threshold, windowCount: t4, sourceCounts: i4, modeCounts: c3, records: n2 }, null, 2) }] }), e2?.(`[ripgrep-monitor] reported storm: ${t4} spawns in ${s2.windowMs}ms (top=${d2})`);
          } catch (t5) {
            e2?.(`[ripgrep-monitor] report failed: ${String(t5)}`);
          }
        })(c2, r3);
      } catch {
      }
    });
    const i2 = () => {
      (0, $.o9_)(void 0);
    };
    if (!o2()) return e2?.(`[ripgrep-monitor] enabled (window=${s2.windowMs}ms threshold=${s2.threshold} maxRecords=${s2.maxRecords} report=${s2.reportToSentry})`), i2;
    i2();
  }
  const A = (0, s.h)("cursor-agent-host"), O = (0, c.Pu)("vscode.agent_exec.activate_calls", {}), F = "cursorAgentExec.startEventLoopDelayMeasurementForTesting", j = "cursorAgentExec.finishEventLoopDelayMeasurementForTesting";
  function R(e2) {
    const t2 = [];
    try {
      const o2 = (0, u.km)(), p2 = new s.yt([(0, d.eA)(new m.e5(), u.so), new m.jX(o2)]), h2 = new m.E5(), g2 = (0, n.q6)().with(s._O, p2).with(c.Fm, h2);
      O.increment(g2);
      const w2 = e2.activationStartMs ?? Date.now(), v2 = (0, a.VI)(g2.withName("CursorAgentExec.activate"));
      t2.push(() => v2[Symbol.dispose]());
      const y2 = v2.ctx, _2 = new L(() => (0, n.q6)().with(s._O, p2).with(c.Fm, h2));
      t2.push(() => _2.stop()), _2.start();
      const f2 = new S();
      t2.push(() => f2.dispose());
      const b2 = l.commands.registerCommand(F, () => f2.start());
      t2.push(() => b2.dispose());
      const M2 = l.commands.registerCommand(j, () => f2.finish());
      t2.push(() => M2.dispose()), A.info(g2, "cursor_agent_exec.startup.workspace_paths", { workspacePathCount: e2.workspacePaths.length, workspacePaths: [...e2.workspacePaths] });
      const x2 = (0, r.N7)({ projectsDir: (0, i.m4)(), onCompleted: (e3, t3) => {
        A.debug(g2, "Agent data cleanup completed", { ...e3, ...t3 });
      }, onFailed: (e3, t3) => {
        A.warn(g2, "Agent data cleanup failed", { ...t3, error: String(e3) });
      } });
      t2.push(() => x2());
      let C2 = false;
      const k2 = new AbortController();
      let E2;
      t2.push(() => k2.abort()), T((e3) => o2.appendLine(e3), k2.signal).then((e3) => {
        void 0 !== e3 && (E2 = e3, (k2.signal.aborted || C2) && (E2 = void 0, e3()));
      }).catch((e3) => {
        C2 || k2.signal.aborted || o2.appendLine(`[cursor-agent-host] ripgrep invocation monitor failed: ${String(e3)}`);
      });
      let $2 = false;
      const U2 = () => {
        $2 || ($2 = true, v2[Symbol.dispose]());
      }, D2 = (e3) => C2 ? e3 : e3.with(s._O, p2).with(c.Fm, h2), I2 = () => {
        C2 || $2 || (A.info(g2, "cursor_agent_exec.startup.activation_latency", { durationMs: Date.now() - w2 }), U2());
      }, R2 = () => {
        C2 || (C2 = true, k2.abort(), E2?.(), E2 = void 0, U2(), x2(), _2.stop(), b2.dispose(), M2.dispose(), f2.dispose());
      };
      return t2.length = 0, { snapshot: { outputChannelCreated: true, structuredLoggerWired: true, metricsBackendWired: true, performanceMetricsStarted: true, eventLoopMonitorCommandsRegistered: true, agentDataCleanupScheduled: true, ripgrepInvocationMonitorAttempted: true }, serviceCtx: g2, activationCtx: y2, loggerBackend: p2, metricsBackend: h2, attachToTurnContext: D2, markActivationComplete: I2, dispose: R2 };
    } catch (e3) {
      throw (() => {
        for (const e4 of t2.splice(0).reverse()) try {
          e4();
        } catch {
        }
      })(), e3;
    }
  }
}, 28144: (e, t, o) => {
  o.d(t, { An: () => l, E5: () => h, e5: () => p, h2: () => d, jX: () => u });
  var r = o(91105), s = o(91398), n = o(30306);
  const a = "mcp", i = { disableConsoleFallback: true }, c = (async () => {
    try {
      return await s.cursor.checkFeatureGate("mcp_structured_logging");
    } catch {
      return false;
    }
  })();
  class l {
    constructor(e2) {
      this.options = e2;
    }
    log(e2, t2) {
      var o2;
      o2 = () => {
        const e3 = this.buildMcpMetadata(t2.metadata), o3 = t2.error instanceof Error ? t2.error : void 0;
        switch (t2.level) {
          case "debug":
            s.cursor.logStructuredDebug(a, t2.message, e3, i);
            break;
          case "info":
            s.cursor.logStructuredInfo(a, t2.message, e3, i);
            break;
          case "warn":
            s.cursor.logStructuredWarn(a, t2.message, e3, i);
            break;
          case "error":
            s.cursor.logStructuredError(a, t2.message, o3, e3, i);
            break;
          default: {
            const e4 = t2.level;
            throw new Error(`Unhandled log level: ${e4}`);
          }
        }
      }, c.then((e3) => {
        e3 && o2();
      });
    }
    buildMcpMetadata(e2) {
      const t2 = { subkey: this.options.subkey, mcp_version: this.options.mcpVersion };
      if (void 0 !== this.options.identifier && (t2.identifier = this.options.identifier), e2) for (const [o2, r2] of Object.entries(e2)) t2[o2] = r2;
      return { mcpMeta: t2 };
    }
  }
  class d {
    constructor(e2, t2 = r.utt) {
      this.backend = e2, this.metadataKey = t2;
    }
    log(e2, t2) {
      if (true !== t2.metadata?.[this.metadataKey]) return;
      const o2 = { ...t2.metadata ?? {} };
      delete o2[this.metadataKey], this.backend.log(e2, { ...t2, metadata: o2 });
    }
  }
  class u {
    constructor(e2) {
      this.outputChannel = e2;
    }
    log(e2, t2) {
      const { level: o2, message: r2, metadata: s2, error: n2 } = t2;
      let a2 = r2;
      if (s2 && Object.keys(s2).length > 0) try {
        a2 += ` ${JSON.stringify(s2)}`;
      } catch {
        a2 += " [metadata not serializable]";
      }
      switch (o2) {
        case "debug":
          this.outputChannel.debug(a2), n2 && this.outputChannel.debug(this.formatError(n2));
          break;
        case "info":
          this.outputChannel.info(a2), n2 && this.outputChannel.info(this.formatError(n2));
          break;
        case "warn":
          this.outputChannel.warn(a2), n2 && this.outputChannel.warn(this.formatError(n2));
          break;
        case "error":
          this.outputChannel.error(a2), n2 && this.outputChannel.error(this.formatError(n2));
          break;
        default:
          throw new Error(`Unhandled log level: ${o2}`);
      }
    }
    formatError(e2) {
      return e2 instanceof Error ? `${e2.message}
${e2.stack ?? ""}` : String(e2);
    }
  }
  const m = "agent_exec";
  class p {
    log(e2, t2) {
      const { level: o2, message: r2, metadata: a2, error: i2 } = t2, c2 = i2 instanceof Error ? i2 : void 0, l2 = (0, n.QE)(a2);
      switch (o2) {
        case "debug":
          s.cursor.logStructuredDebug(m, r2, a2);
          break;
        case "info":
          s.cursor.logStructuredInfo(m, r2, a2);
          break;
        case "warn":
          s.cursor.logStructuredWarn(m, r2, l2, n.bn);
          break;
        case "error":
          s.cursor.logStructuredError(m, r2, c2, l2, n.bn);
          break;
        default:
          throw new Error(`Unhandled log level: ${o2}`);
      }
    }
  }
  class h {
    record(e2, t2, o2, r2) {
      s.cursor.metricsGauge({ stat: t2.name, value: o2, tags: r2 });
    }
    increment(e2, t2, o2, r2) {
      s.cursor.metricsIncrement({ stat: t2.name, value: o2 ?? 1, tags: r2 });
    }
    gauge(e2, t2, o2, r2) {
      s.cursor.metricsGauge({ stat: t2.name, value: o2, tags: r2 });
    }
    histogram(e2, t2, o2, r2) {
      s.cursor.metricsDistribution({ stat: t2.name, value: o2, tags: r2 });
    }
  }
} };
