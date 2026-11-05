// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 3702 range:137201..153030
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3702: (e, t, r) => {
    "use strict";
    r.d(t, { Rf: () => m, Wn: () => R, ad: () => E, eE: () => I, hi: () => b, k5: () => v, kW: () => S, rd: () => h, y: () => k, yi: () => x, zk: () => A });
    var n = r(78877), s = r(17392), o = r(37949), i = r(33002), a = r(56215), c = r(49273), l = r(46612), u = r(1368);
    const d = (0, o.h)("HarnessRoutingAdapter");
    function p(e2) {
      return void 0 === e2.standIn ? [e2] : [e2, e2.standIn];
    }
    const m = "agent_host.module.fault", h = "agent_host.module.revert", f = "agent_host.module.rerun", g = "The agent stopped because of an internal error. Try again.";
    function y(e2) {
      return e2 < 3e5 ? "lt_5m" : e2 < 9e5 ? "lt_15m" : "ge_15m";
    }
    function w(e2) {
      return new s.DN(g, { cause: e2, displayInfo: { title: "Request Failed", detail: g, isRetryable: true } });
    }
    const v = "agent_host.module.host_lost", _ = "agent_host.module.turn", A = "agent_host.module.load", S = "agent_host.module.swap_ms", b = "agent_host.module.heap_mb", E = "agent_host.module.serve", I = "agent_host.module.write_failed", C = String(a.nl);
    function k(e2, t2, r2, n2) {
      const s2 = "static" === e2.source ? void 0 : e2, o2 = s2?.builtAt, i2 = void 0 !== o2 && /(?:Z|[+-]\d{2}:\d{2})$/.test(o2) ? Date.parse(o2) : Number.NaN;
      return { module_version: e2.generation.slice(0, 12), module_channel: t2 ?? "unknown", serving: "installed" === e2.source ? "module" : "static", harness_revision: C, ...void 0 === n2 ? {} : { module_mode: n2 }, ...void 0 === r2 ? {} : { module_sequence: String(r2) }, ...void 0 !== s2?.commit && /^[0-9a-f]{40}$/.test(s2.commit) ? { module_commit: s2.commit } : {}, ...Number.isNaN(i2) ? {} : { module_built: new Date(i2).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "-") } };
    }
    const x = k({ generation: "static", source: "static" }, void 0, void 0);
    function T(e2) {
      return Math.round(e2 / 1024 / 1024);
    }
    class R {
      constructor(e2) {
        this.disposed = false, this.recentTurns = /* @__PURE__ */ new Map(), this.retriesOnFloor = /* @__PURE__ */ new Map(), this.onRevert = e2.onRevert, this.loader = e2.loader, this.compose = e2.compose, this.log = e2.log, this.metrics = e2.metrics, this.logContext = e2.logContext ?? i.q6, this.disposeShared = e2.disposeShared, this.clock = e2.clock ?? c.l, this.now = e2.now ?? (() => performance.now()), this.stopCounting = [this.loader.onDidLoad(({ module: e3, channel: t2, sequence: r2, verdict: n2, reason: s2, when: o2 }) => this.increment(A, { verdict: n2, reason: s2, when: o2, ...k(e3, t2, r2) })), this.loader.onDidServe(({ module: e3, channel: t2, sequence: r2, cause: n2, when: s2, refused: o2, currentChangedAt: i2 }) => {
          const a2 = { cause: n2, when: s2, ...void 0 === o2 ? {} : { verdict: o2.verdict, reason: o2.reason }, ...k(e3, t2, r2) };
          this.increment(E, a2), void 0 !== i2 && this.distribution("agent_host.module.pickup_delay_ms", Math.max(0, Math.round(Date.now() - i2)), a2);
        }), this.loader.onDidFailToWrite(({ file: e3, code: t2, channel: r2 }) => this.increment(I, { file: e3, code: t2, module_channel: r2 ?? "unknown" })), this.loader.onDidRevert((e3) => this.countLoaderRevert(e3)), this.loader.onDidLoseHost(({ generation: e3, phase: t2, channel: r2, sequence: n2 }) => this.increment(v, { phase: t2, ...k({ generation: e3, source: "installed" }, r2, n2) }))];
      }
      countLoaderRevert({ module: e2, channel: t2, sequence: r2, trigger: n2, fallback: s2 }) {
        this.log(`${e2.label} (${(0, u.rw)(e2.generation)}) ${"crash_loop" === n2 ? "kept killing extension hosts" : "was reverted by another window"}; serving ${(0, u.KC)(s2)}`);
        const o2 = { error_class: "crash_loop" === n2 ? "host_lost" : "none", trigger: n2, late_faults: "0", ...k(e2, t2, r2) };
        this.increment(h, o2), this.warn(this.logContext(), "Agent host module reverted", { ...o2, fallback_version: s2.generation.slice(0, 12), fallback_serving: "installed" === s2.source ? "module" : "static" }), this.tellOfRevert({ label: e2.label, version: e2.generation.slice(0, 12), channel: t2, fallback: { label: s2.label, version: s2.generation.slice(0, 12), builtIn: "installed" !== s2.source }, trigger: n2 });
        const i2 = this.slot;
        void 0 !== i2 && i2.harness.info.generation === e2.generation && (this.slot = void 0, this.retire(i2));
      }
      activeHarness() {
        return (this.slot?.harness ?? this.loader.current()).info;
      }
      async run(e2) {
        if (this.disposed) throw new Error("HarnessRoutingAdapter is disposed");
        const t2 = this.now();
        let r2;
        try {
          const n2 = this.slotForTurn(this.pollSlot(t2), e2), s2 = this.takeRetryOnFloor(e2, n2);
          if (void 0 !== s2) return void await this.runOnFloor(e2, (e3) => `running the next turn of a conversation on ${e3} after a late module fault on ${s2.tags.module_version ?? "?"}`, { after: "late_fault", error_class: s2.errorClass, ...s2.tags }, { countsAsTurn: true });
          r2 = n2.harness, this.increment(_, this.tagsOf(n2.harness)), await this.runOn(n2, e2);
        } catch (n2) {
          if (!(n2 instanceof l.R2)) throw n2;
          if ("installed" !== n2.module.source || void 0 === r2) throw w(n2);
          if (!n2.early) throw this.keepRetryOnFloor(e2, { generation: n2.module.generation, errorClass: n2.errorClass, tags: this.tagsOf(r2) }), w(n2);
          e2.conversationActionManager.reopen();
          const s2 = (0, u.KC)(n2.module);
          await this.runOnFloor(e2, (e3) => `running the turn again on ${e3} after an early module fault on ${s2}`, { after: "early_fault", error_class: n2.errorClass, ...this.tagsOf(r2) }, { countsAsTurn: false, waitingSince: t2 });
        }
      }
      async runOnFloor(e2, t2, { after: r2, ...n2 }, { countsAsTurn: o2, waitingSince: i2 }) {
        const a2 = { ...void 0 === r2 ? {} : { after: r2 }, ...n2 }, c2 = this.now(), d2 = this.composeSlot(this.loader.floor());
        this.measureSwap(d2, { started: c2, when: "rerun", from: "module" }), d2.retired = true, this.log(t2((0, u.KC)(d2.harness.info))), o2 && this.increment(_, this.tagsOf(d2.harness)), void 0 !== i2 && this.distribution("agent_host.module.rerun_delay_ms", this.now() - i2, n2);
        try {
          await this.runOn(d2, e2);
        } catch (e3) {
          const t3 = e3 instanceof s.cc ? "aborted" : "failed";
          throw this.increment(f, { ...a2, result: t3 }), e3 instanceof l.R2 ? w(e3) : e3;
        }
        this.increment(f, { ...a2, result: "ok" });
      }
      keepRetryOnFloor(e2, t2) {
        const r2 = e2.runOptions.conversationId;
        if (void 0 !== r2 && "" !== r2) {
          this.retriesOnFloor.delete(r2), this.retriesOnFloor.set(r2, t2);
          for (const e3 of this.retriesOnFloor.keys()) {
            if (this.retriesOnFloor.size <= 64) break;
            this.retriesOnFloor.delete(e3);
          }
        }
      }
      takeRetryOnFloor(e2, t2) {
        const r2 = e2.runOptions.conversationId, n2 = void 0 === r2 ? void 0 : this.retriesOnFloor.get(r2);
        if (void 0 === n2 || void 0 === r2) return;
        this.retriesOnFloor.delete(r2);
        const s2 = t2.harness.info;
        return "installed" === s2.source && s2.generation === n2.generation ? n2 : void 0;
      }
      pollSlot(e2) {
        const t2 = this.loader.poll();
        return void 0 !== t2.rejected && this.log(`pinned generation ${(0, u.rw)(t2.rejected.generation)} rejected (${t2.rejected.reason}); serving ${(0, u.KC)(t2.active.info)}`), this.slotFor(t2.active, e2);
      }
      slotFor(e2, t2) {
        const r2 = this.slot;
        if (void 0 !== r2 && r2.harness.harness === e2.harness) return r2;
        const n2 = this.composeSlot(e2);
        this.slot = n2;
        const s2 = this.composedOn;
        var o2;
        return this.composedOn = e2.info, void 0 !== r2 && this.retire(r2), this.measureSwap(n2, { started: t2, when: void 0 === s2 ? "start" : "turn", from: (o2 = s2, void 0 === o2 ? "none" : "installed" === o2.source ? "module" : "static") }), n2;
      }
      measureSwap(e2, { started: t2, when: r2, from: s2 }) {
        const o2 = Math.round(this.now() - t2), i2 = this.tagsOf(e2.harness);
        this.distribution(S, o2, { when: r2, result: e2.composeFailed ? "compose_failed" : "ok", from: s2, ...i2 });
        const a2 = this.loader.serving().length;
        this.distribution(b, T((0, n.getHeapStatistics)().used_heap_size), { live: a2 >= 3 ? "3+" : String(a2), when: r2, module_channel: i2.module_channel ?? "unknown", serving: i2.serving ?? "static" });
      }
      slotForTurn(e2, t2) {
        return "installed" !== e2.harness.info.source || e2.harness.capabilities.has(a.eN.seamRunOptions) || !(0, s.Xs)(t2.runOptions) ? e2 : (void 0 === e2.standIn && (e2.standIn = this.composeSlot(this.loader.floor()), this.log(`serving child turns on ${(0, u.KC)(e2.standIn.harness.info)}: ${(0, u.KC)(e2.harness.info)} does not announce ${a.eN.seamRunOptions}`)), e2.standIn);
      }
      composeSlot(e2) {
        let t2, r2 = false;
        try {
          t2 = this.compose(e2, (t3) => {
            for (const r3 of t3 ?? []) {
              this.log(`module fault on ${(0, u.KC)(r3.module)} after the turn completed: ${r3.errorClass}: ${r3.reason}`);
              const t4 = { timing: "after_turn", error_class: r3.errorClass, ...this.tagsOf(e2) };
              this.increment(m, t4), this.warn(this.logContext(), "Agent host module fault", t4);
            }
            this.countTurn(e2.info.generation, { fault: false, late: false }), this.loader.markServed(e2.info);
          }, (t3) => {
            this.log(`turn on ${(0, u.KC)(e2.info)} stopped after ${Math.round(t3 / 1e3)} s with only heartbeats crossing`), this.increment("agent_host.module.quiet_stop", { quiet: y(t3), ...this.tagsOf(e2) });
          }), this.log(`composed managed-local adapter on ${(0, u.KC)(e2.info)}`);
        } catch (n2) {
          this.log(`composition on ${(0, u.KC)(e2.info)} failed: ${n2 instanceof Error ? n2.message : String(n2)}`), t2 = { run: () => Promise.reject(n2), dispose: () => {
          } }, r2 = true;
        }
        return { adapter: t2, harness: e2, composeFailed: r2, inFlight: 0, retired: false, disposed: false };
      }
      retire(e2) {
        for (const t2 of p(e2)) this.log(`retiring ${(0, u.KC)(t2.harness.info)}`), t2.retired = true, this.release(t2);
      }
      async runOn(e2, t2) {
        e2.inFlight += 1, this.log(`turn -> ${(0, u.KC)(e2.harness.info)}, model=${t2.runOptions.requestedModel?.modelId || t2.modelDetails?.modelId || "?"}`), this.loader.turnStarted(e2.harness.info);
        try {
          await e2.adapter.run(t2);
        } catch (r2) {
          throw r2 instanceof l.R2 && this.countFault(r2, e2.harness, t2.ctx), r2;
        } finally {
          this.loader.turnSettled(e2.harness.info), e2.inFlight -= 1, e2.retired && this.release(e2);
        }
      }
      countTurn(e2, t2) {
        const r2 = [...this.recentTurns.get(e2) ?? [], t2].slice(-5);
        return this.recentTurns.set(e2, r2), r2;
      }
      countFault(e2, t2, r2) {
        const { generation: n2 } = e2.module, s2 = this.countTurn(n2, { fault: true, late: !e2.early }), o2 = s2.filter((e3) => e3.fault), i2 = s2.length - 1 - s2.findLastIndex((e3) => !e3.fault), a2 = e2.early ? "early" : "late";
        this.log(`module fault on ${(0, u.KC)(e2.module)}: ${e2.errorClass}, ${a2}, ${i2} in a row, ${o2.length} of the last ${s2.length}: ${e2.reason}`);
        const c2 = { timing: a2, error_class: e2.errorClass, ...this.tagsOf(t2) };
        if (this.increment(m, c2), this.warn(r2, "Agent host module fault", { ...c2, in_a_row: i2, in_window: o2.length }), o2.length < 3 || "installed" !== e2.module.source) return;
        this.recentTurns.delete(n2);
        const l2 = i2 >= 3, d2 = l2 ? `${i2} module faults in a row` : `${o2.length} module faults in its last ${s2.length} turns`, p2 = l2 ? "in_a_row" : "window", f2 = this.loader.markIncompatible({ generation: n2, reason: `${d2}, the last ${e2.errorClass}: ${e2.reason}`, revert: { label: e2.module.label, trigger: p2 } });
        if (void 0 === f2) return;
        this.log(`reverted ${(0, u.KC)(e2.module)} for every window on this machine after ${d2}; serving ${(0, u.KC)(f2.info)}`);
        const g2 = { error_class: e2.errorClass, trigger: p2, late_faults: String(o2.filter((e3) => e3.late).length), ...this.tagsOf(t2) };
        this.increment(h, g2), this.warn(r2, "Agent host module reverted", { ...g2, fallback_version: f2.info.generation.slice(0, 12), fallback_serving: "installed" === f2.info.source ? "module" : "static" }), this.tellOfRevert({ label: e2.module.label, version: n2.slice(0, 12), channel: t2.channel, fallback: { label: f2.info.label, version: f2.info.generation.slice(0, 12), builtIn: "installed" !== f2.info.source }, trigger: p2 });
        const y2 = this.slot;
        void 0 !== y2 && y2.harness.info.generation === n2 && (this.slot = void 0, this.retire(y2));
      }
      tellOfRevert(e2) {
        try {
          this.onRevert?.(e2);
        } catch (e3) {
          this.log(`revert not told: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }
      tagsOf(e2) {
        return k(e2.info, e2.channel, e2.sequence);
      }
      increment(e2, t2) {
        try {
          this.metrics?.increment?.({ stat: e2, value: 1, tags: t2 });
        } catch (t3) {
          this.log(`${e2} counter not emitted: ${t3 instanceof Error ? t3.message : String(t3)}`);
        }
      }
      distribution(e2, t2, r2) {
        try {
          this.metrics?.distribution({ stat: e2, value: t2, tags: r2 });
        } catch (t3) {
          this.log(`${e2} distribution not emitted: ${t3 instanceof Error ? t3.message : String(t3)}`);
        }
      }
      warn(e2, t2, r2) {
        try {
          d.warn(e2, t2, r2);
        } catch (e3) {
          this.log(`"${t2}" not logged: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }
      release(e2) {
        if (!(e2.disposed || e2.inFlight > 0)) try {
          this.disposeSlot(e2), this.log(`released ${(0, u.KC)(e2.harness.info)}; ${this.footprint()}`), this.logFootprintAfterGc(e2.harness.info);
        } catch (t2) {
          this.log(`dispose of ${(0, u.KC)(e2.harness.info)} threw: ${t2 instanceof Error ? t2.message : String(t2)}`);
        }
      }
      footprint() {
        const { heapUsed: e2, rss: t2 } = process.memoryUsage(), r2 = this.loader.serving().length;
        return `heapUsed ${T(e2)} MB, rss ${T(t2)} MB, installed generations live: ${r2}`;
      }
      logFootprintAfterGc(e2) {
        const t2 = globalThis.gc;
        "function" == typeof t2 && this.clock.schedule(0, () => {
          try {
            t2(), this.log(`after gc, ${(0, u.KC)(e2)} released: ${this.footprint()}`);
          } catch (e3) {
            this.log(`gc after release threw: ${e3 instanceof Error ? e3.message : String(e3)}`);
          }
        });
      }
      disposeSlot(e2) {
        e2.disposed = true;
        try {
          e2.adapter.dispose();
        } finally {
          this.loader.current().harness !== e2.harness.harness && this.loader.release(e2.harness);
        }
      }
      dispose() {
        if (this.disposed) return;
        this.disposed = true;
        for (const e3 of this.stopCounting) e3();
        const e2 = this.slot;
        let t2;
        this.slot = void 0;
        for (const r2 of void 0 === e2 ? [] : p(e2)) if (!r2.disposed) try {
          this.disposeSlot(r2);
        } catch (e3) {
          t2 ??= e3;
        }
        try {
          this.disposeShared?.();
        } catch (e3) {
          t2 ??= e3;
        }
        if (void 0 !== t2) throw t2;
      }
    }
  }