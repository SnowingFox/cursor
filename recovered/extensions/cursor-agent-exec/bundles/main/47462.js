// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 47462 range:3408725..3484792
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47462: (e, t, r) => {
    "use strict";
    r.d(t, { OJ: () => c, ng: () => h, jC: () => x, ae: () => tt });
    var n = r(27998), s = r(62671), o = r(65716);
    function i(e2) {
      if ("object" != typeof e2 || null === e2) return false;
      const t2 = e2.event;
      return "backgrounded" === t2?.case;
    }
    function a(e2) {
      if ("object" != typeof e2 || null === e2) return;
      const t2 = e2.path;
      return "string" == typeof t2 && t2.length > 0 ? t2 : void 0;
    }
    class c {
      cacheCarriersForExecId(e2, t2) {
        const r2 = this.carriersByExecId.get(e2);
        if (!(void 0 !== r2 && r2.length > 0 && 0 === t2.length)) for (this.carriersByExecId.has(e2) && this.carriersByExecId.delete(e2), this.carriersByExecId.set(e2, t2); this.carriersByExecId.size > c.CARRIERS_BY_EXEC_ID_MAX; ) {
          const e3 = this.carriersByExecId.keys().next().value;
          if (void 0 === e3) break;
          this.carriersByExecId.delete(e3);
        }
      }
      constructor(e2, t2, r2, n2) {
        this.inner = e2, this.wake = r2, this.carriersByExecId = /* @__PURE__ */ new Map(), this.inFlightByExecId = /* @__PURE__ */ new Map(), this.resolveDrain = "function" == typeof t2 ? t2 : (e3) => t2, this.skipPathWriteDrain = n2?.skipPathWriteDrain, this.onWakeWrittenPath = n2?.onWakeWrittenPath, this.forceWrittenPathBeforeDrain = n2?.forceWrittenPathBeforeDrain, this.writeBarrierTimeoutMs = n2?.writeBarrierTimeoutMs ?? 2e3, this.resolveWriteBarrierTimeoutMs = n2?.resolveWriteBarrierTimeoutMs, this.onWriteBarrier = n2?.onWriteBarrier;
      }
      resolveTimeoutMs() {
        if (void 0 !== this.resolveWriteBarrierTimeoutMs) try {
          const e2 = this.resolveWriteBarrierTimeoutMs();
          if ("number" == typeof e2 && Number.isFinite(e2)) return e2;
        } catch {
        }
        return this.writeBarrierTimeoutMs;
      }
      get(e2) {
        return this.wrapImpl(e2.symbol, this.inner.get(e2));
      }
      *entries() {
        for (const [e2, t2] of this.inner.entries()) yield [e2, this.wrapImpl(e2.symbol, t2)];
      }
      wrapImpl(e2, t2) {
        if (!(function(e3) {
          return "object" == typeof e3 && null !== e3 && "execute" in e3 && "function" == typeof e3.execute;
        })(t2)) return t2;
        const r2 = (function(e3) {
          return e3 === n.Lnu.symbol || e3 === n.RpG.symbol || e3 === n.ohZ.symbol || e3 === n.PiX.symbol ? { kind: "path" } : e3 === n.qkk.symbol || e3 === n.wve.symbol || e3 === n.OkD.symbol || e3 === n.TZ.symbol ? { kind: "exposed" } : void 0;
        })(e2), c2 = this.resolveDrain, l2 = this.wake, u2 = this.skipPathWriteDrain, d2 = this.forceWrittenPathBeforeDrain, p2 = () => this.resolveTimeoutMs(), m2 = this.onWriteBarrier, h2 = this.onWakeWrittenPath, f2 = (e3, t3) => {
          if (void 0 !== r2 && void 0 !== l2) try {
            if ("path" === r2.kind) {
              const r3 = a(e3);
              void 0 !== r3 && (l2.wakeForWrittenPath(r3), h2?.(r3, t3));
            } else l2.wakeExposedMounts();
          } catch {
          }
        }, g2 = this.cacheCarriersForExecId.bind(this), y2 = this.carriersByExecId, w2 = this.inFlightByExecId, v2 = async (e3, t3) => {
          const r3 = t3?.hookContextCollector;
          if (void 0 === r3) return [];
          if (false === t3?.deliverAgentStoreConflictNotices) return [];
          const n2 = void 0 !== t3?.execId && t3.execId.length > 0 ? t3.execId : void 0;
          if (void 0 !== n2) {
            const e4 = y2.get(n2);
            if (void 0 !== e4) return e4.length > 0 && r3.push(...e4), e4;
            const t4 = w2.get(n2);
            if (void 0 !== t4) {
              const e5 = await t4;
              return e5.length > 0 && r3.push(...e5), e5;
            }
          }
          const s2 = async (t4) => {
            const r4 = c2(e3);
            let s3 = [];
            try {
              const e4 = await r4.peek();
              if (s3 = e4.eventIds, e4.carriers.length > 0) return t4.push(...e4.carriers), r4.ack(e4.eventIds), void 0 !== n2 && g2(n2, e4.carriers), e4.carriers;
              s3.length > 0 && r4.ack(s3);
              const o3 = [];
              return void 0 !== n2 && g2(n2, o3), o3;
            } catch {
              return s3.length > 0 && r4.release(s3), [];
            }
          };
          if (void 0 === n2) return await s2(r3);
          const o2 = s2(r3);
          w2.set(n2, o2);
          try {
            return await o2;
          } finally {
            w2.get(n2) === o2 && w2.delete(n2);
          }
        };
        return new Proxy(t2, { get: (t3, c3, l3) => "execute" !== c3 ? Reflect.get(t3, c3, l3) : (c4, l4, h3) => {
          const g3 = t3.execute.call(t3, c4, l4, h3);
          return "object" == typeof (y3 = g3) && null !== y3 && Symbol.asyncIterator in y3 && "function" == typeof y3[Symbol.asyncIterator] ? (async function* () {
            let t4 = false, r3 = false, o2 = false;
            try {
              for await (const r4 of g3) if (e2 === n.wve.symbol && i(r4)) {
                if (!t4) {
                  f2(l4, c4);
                  const e3 = await v2(c4, h3);
                  t4 = true, e3.length > 0 && (yield new s.FI({ event: { case: "hookContext", value: new s.Ng({ hookAdditionalContexts: [...e3] }) } }));
                }
                yield r4;
              } else yield r4;
              o2 = true;
            } catch (e3) {
              throw r3 = true, e3;
            } finally {
              f2(l4, c4), t4 || r3 || !o2 || await v2(c4, h3);
            }
          })() : (function(e3) {
            return "object" == typeof e3 && null !== e3 && "then" in e3 && "function" == typeof e3.then;
          })(g3) ? (async () => {
            try {
              const t4 = await g3;
              f2(l4, c4);
              return e2 === n.Lnu.symbol && true === u2?.() && true === h3?.enableAgentStoreConflictNotices || (await (async function(e3, t5, r3, n2) {
                const s2 = (e4) => {
                  try {
                    n2.onWriteBarrier?.(e4);
                  } catch {
                  }
                };
                if (void 0 === e3 || "path" !== r3?.kind) return;
                const i2 = a(t5);
                if (void 0 === i2) return;
                if (!(n2.timeoutMs > 0)) return void s2({ durationMs: 0, outcome: "skipped" });
                const c5 = Date.now(), l5 = e3(i2).then((e4) => e4, () => "error"), u3 = await Promise.race([l5, (0, o.cb)(n2.timeoutMs).then(() => "timeout")]);
                "not_store_path" !== u3 && s2({ durationMs: Date.now() - c5, outcome: u3 });
              })(d2, l4, r2, { timeoutMs: p2(), onWriteBarrier: m2 }), await v2(c4, h3)), t4;
            } catch (e3) {
              throw f2(l4, c4), e3;
            }
          })() : (f2(l4, c4), g3);
          var y3;
        } });
      }
    }
    c.CARRIERS_BY_EXEC_ID_MAX = 32;
    var l = r(76760), u = r(93181), d = r(90393), p = (r(84683), r(75149));
    function m(e2) {
      return { v: e2.v, eventId: e2.event_id, journalEpoch: e2.journal_epoch, seq: e2.seq, tsMs: e2.ts_ms, kind: e2.kind, ...void 0 !== e2.store_id ? { storeId: e2.store_id } : {}, ...void 0 !== e2.original_rel_path ? { originalRelPath: e2.original_rel_path } : {}, ...void 0 !== e2.conflict_rel_path ? { conflictRelPath: e2.conflict_rel_path } : {}, ...void 0 !== e2.original_abs_path ? { originalAbsPath: e2.original_abs_path } : {}, ...void 0 !== e2.conflict_abs_path ? { conflictAbsPath: e2.conflict_abs_path } : {}, ...void 0 !== e2.preserved_bytes ? { preservedBytes: e2.preserved_bytes } : {}, ...void 0 !== e2.scope_kind ? { scopeKind: e2.scope_kind } : {}, ...void 0 !== e2.limit_bytes ? { limitBytes: e2.limit_bytes } : {}, ...void 0 !== e2.usage_bytes ? { usageBytes: e2.usage_bytes } : {}, ...void 0 !== e2.source ? { source: e2.source } : {}, ...true === e2.remote_only ? { remoteOnly: true } : {} };
    }
    class h {
      constructor(e2) {
        this.pending = /* @__PURE__ */ new Map(), this.leased = /* @__PURE__ */ new Map(), this.deferredEagerWrittenPaths = /* @__PURE__ */ new Set(), this.deferredWakeWrittenPaths = /* @__PURE__ */ new Set(), this.deferredForceWrittenPaths = /* @__PURE__ */ new Set(), this.drainChain = Promise.resolve(), this.driver = e2.driver, this.sessionStartedAtMs = e2.sessionStartedAtMs, this.claimState = e2.claimState, this.announced = e2.claimState?.announced ?? e2.announcedEventIds ?? /* @__PURE__ */ new Set(), this.leasedIds = e2.claimState?.leasedIds ?? /* @__PURE__ */ new Set(), this.quotaNoticesEnabled = "function" == typeof e2.quotaNoticesEnabled ? e2.quotaNoticesEnabled : () => true === e2.quotaNoticesEnabled, this.cursors = /* @__PURE__ */ new Map(), this.defaultTimeoutMs = e2.defaultTimeoutMs ?? 5e3, this.resolveForceGraceTimeoutMs = e2.resolveForceGraceTimeoutMs, this.warn = e2.warn ?? (() => {
        });
      }
      async execute(e2, t2, r2) {
        switch (t2.op) {
          case "ack":
            return this.ack(t2.eventIds);
          case "release":
            return this.release(t2.eventIds);
          case "noteDeferredEagerWrittenPaths":
            return this.noteDeferredEagerWrittenPaths(t2);
          case "peek":
            return await this.peek(t2);
          case "syncAndPeek":
            return await this.syncAndPeek(t2);
          default:
            return { kind: "failed", error: "unknown op" };
        }
      }
      noteDeferredEagerWrittenPaths(e2) {
        const t2 = e2.writtenPaths;
        if (0 === t2.length) return { kind: "noted", count: 0 };
        const r2 = this.deferredForceWrittenPaths.size, n2 = /* @__PURE__ */ new Set();
        for (const e3 of t2) {
          const t3 = this.driver.resolveMountKeyForPath(e3);
          void 0 !== t3 && n2.add(t3);
        }
        const s2 = this.mountsForSyncAndPeek({ conversationId: e2.conversationId, eager: true, writtenMountKeys: n2 });
        return this.rememberDeferredForInheritedWrittenPaths(s2, t2), { kind: "noted", count: Math.max(0, this.deferredForceWrittenPaths.size - r2) };
      }
      ack(e2) {
        const t2 = e2.filter((e3) => this.leased.has(e3)), r2 = (0, d._3)(this.announced, t2), n2 = [];
        for (const e3 of t2) {
          const t3 = this.leased.get(e3) ?? this.pending.get(e3), r3 = t3?.event.original_abs_path;
          "string" == typeof r3 && r3.length > 0 && n2.push(r3), this.pending.delete(e3), this.leased.delete(e3), this.leasedIds.delete(e3);
        }
        return this.clearDeferredEagerWrittenPathsMatchingPaths(n2), this.clearDeferredWakeWrittenPathsMatchingPaths(n2), this.clearDeferredForceWrittenPathsMatchingPaths(n2), { kind: "acked", count: r2 };
      }
      release(e2) {
        const t2 = this.leased.size;
        return this.releaseLeased(e2), { kind: "released", count: Math.max(0, t2 - this.leased.size) };
      }
      releaseAllLeased() {
        this.releaseLeased([...this.leased.keys()]);
      }
      ackAllLeased() {
        this.ack([...this.leased.keys()]);
      }
      noteDeferredWrittenPaths(e2) {
        for (const t2 of e2) {
          const e3 = this.resolveWrittenPathForDeferred(t2);
          void 0 !== e3 && this.deferredWakeWrittenPaths.add(e3);
        }
      }
      async peek(e2) {
        const t2 = this.driver.listMounts(e2.conversationId).filter((e3) => false !== e3.deliverEvents);
        if (0 === t2.length) return { kind: "not-applicable" };
        const { events: r2, gap: n2 } = await this.drainMounts(t2, { lease: true });
        return this.completedOrRelease(r2, n2);
      }
      async syncAndPeek(e2) {
        const t2 = true === e2.eager, r2 = false !== e2.rememberEagerDeferral;
        let n2 = [], s2 = false;
        const i2 = t2 ? [] : [...this.deferredWakeWrittenPaths], a2 = t2 || 0 !== (e2.writtenPaths?.length ?? 0) ? t2 ? [] : [...this.deferredForceWrittenPaths].filter((t3) => y({ original_abs_path: t3 }, e2.writtenPaths ?? [])) : [...this.deferredForceWrittenPaths], c2 = g([...this.deferredEagerWrittenPaths, ...a2, ...i2]);
        if (!t2 && c2.length > 0) {
          const t3 = c2, r3 = await this.syncAndPeek({ ...e2, writtenPaths: t3, eager: true, rememberEagerDeferral: false });
          ("completed" === r3.kind || "timed-out" === r3.kind) && r3.events.length > 0 && void 0 !== r3.reminder && r3.reminder.length > 0 && (n2 = [...r3.events], s2 = "completed" === r3.kind && true === r3.gap);
        }
        const l2 = (e3) => {
          if (!t2) {
            if (!("not-applicable" === e3.kind || "timed-out" === e3.kind && 0 === e3.events.length)) for (const e4 of i2) this.deferredWakeWrittenPaths.delete(e4);
          }
          return this.mergeDeferredRescueIntoBarrier(e3, n2, s2);
        }, u2 = t2 ? e2.writtenPaths ?? [] : g([...e2.writtenPaths ?? [], ...this.deferredEagerWrittenPaths, ...a2, ...i2]), d2 = /* @__PURE__ */ new Set(), p2 = [];
        for (const e3 of u2) {
          const t3 = this.driver.resolveMountKeyForPath(e3);
          void 0 !== t3 && d2.add(t3), p2.push(this.driver.resolveWrittenPathAbs?.(e3) ?? e3);
        }
        if (t2 && u2.length > 0 && 0 === d2.size) return l2({ kind: "not-applicable" });
        const m2 = this.driver.listMounts(e2.conversationId), h2 = new Set(m2.map((e3) => e3.mountKey)), f2 = this.mountsForSyncAndPeek({ conversationId: e2.conversationId, eager: t2, writtenMountKeys: d2, conversationMounts: m2 });
        if (0 === f2.length) return l2({ kind: "not-applicable" });
        const w2 = t2 ? [...d2] : [.../* @__PURE__ */ new Set([...f2.filter((e3) => d2.has(e3.mountKey) || this.safeIsDirty(e3.mountKey)).map((e3) => e3.mountKey), ...d2])], v2 = f2.filter((e3) => false === e3.deliverEvents ? d2.has(e3.mountKey) : h2.has(e3.mountKey));
        if (0 === w2.length) {
          const e3 = await this.drainMounts(v2, { lease: true, advanceCursor: !t2, ...t2 ? { parkWrittenPaths: p2 } : { restrictInheritedToWrittenPaths: p2 } }), r3 = this.scopeDrainedEvents(e3.events, { eager: t2, writtenPaths: p2 }), n3 = this.shouldUseStrongEagerAttribution(t2, u2);
          return r3.length > 0 && this.rememberDeferredForInheritedWrittenPaths(f2, u2), l2(this.completedOrRelease(r3, e3.gap, n3));
        }
        const _2 = this.claimState ?? { chain: this.drainChain };
        let b2;
        const S2 = new Promise((e3) => {
          b2 = e3;
        }), k2 = _2.chain, x2 = k2.then(() => S2);
        _2.chain = x2, void 0 === this.claimState && (this.drainChain = x2);
        const E2 = /* @__PURE__ */ new Map();
        if (t2) for (const e3 of u2) {
          const t3 = this.driver.resolveMountKeyForPath(e3);
          void 0 !== t3 && (E2.has(t3) ? E2.set(t3, void 0) : E2.set(t3, e3));
        }
        let I2 = false, T2 = [], C2 = [], P2 = false;
        const A2 = e2.timeoutMs ?? this.defaultTimeoutMs;
        try {
          const e3 = w2.map((e4) => this.safeForceSyncMount({ mountKey: e4, absPath: t2 ? E2.get(e4) : void 0, timeoutMs: A2 })), r3 = Promise.allSettled(e3);
          if (A2 > 0) {
            const e4 = await Promise.race([r3.then((e5) => ({ done: true, results: e5 })), (0, o.cb)(A2).then(() => ({ done: false }))]);
            if (e4.done) T2 = e4.results;
            else {
              I2 = true;
              const e5 = await this.raceForceGrace(r3);
              void 0 !== e5 && (T2 = e5);
            }
          } else T2 = await r3;
          await k2;
          const n3 = await this.drainMountsUnlocked(v2, { lease: true, advanceCursor: !t2, ...t2 ? { parkWrittenPaths: p2 } : { restrictInheritedToWrittenPaths: p2 } });
          P2 = n3.gap, C2 = this.scopeDrainedEvents(n3.events, { eager: t2, writtenPaths: p2 });
        } finally {
          b2();
        }
        const R2 = this.shouldUseStrongEagerAttribution(t2, u2);
        if (C2.length > 0 && this.rememberDeferredForInheritedWrittenPaths(f2, u2), I2) {
          if (0 === C2.length) return t2 && r2 && u2.length > 0 && this.rememberDeferredEagerWrittenPaths(u2), l2({ kind: "timed-out", events: [] });
          const e3 = this.renderReminder(C2, R2), n3 = this.releaseSuppressedQuotaEvents(C2);
          return 0 === n3.length ? (t2 && r2 && u2.length > 0 && this.rememberDeferredEagerWrittenPaths(u2), l2({ kind: "timed-out", events: [] })) : void 0 === e3 ? (this.ack(n3.map((e4) => e4.eventId)), t2 && r2 && u2.length > 0 && this.rememberDeferredEagerWrittenPaths(u2), l2({ kind: "timed-out", events: [] })) : l2({ kind: "timed-out", events: n3, reminder: e3 });
        }
        const M2 = new Set(v2.map((e3) => e3.mountKey)), J2 = w2.some((e3, t3) => {
          if (!M2.has(e3)) return false;
          const r3 = T2[t3];
          return void 0 !== r3 && "fulfilled" === r3.status && ("passive" === r3.value || "absent" === r3.value || "error" === r3.value || "denied" === r3.value);
        });
        if (0 === C2.length && J2) return t2 && r2 && u2.length > 0 && this.rememberDeferredEagerWrittenPaths(u2), l2({ kind: "mount-passive" });
        if (0 === C2.length && t2 && u2.length > 0 && T2.length > 0 && T2.every((e3) => "fulfilled" === e3.status && "synced" === e3.value)) {
          const e3 = new Set(f2.filter((e4) => false === e4.deliverEvents).map((e4) => e4.mountKey));
          this.clearDeferredEagerWrittenPathsMatchingPaths(u2.map((e4) => this.resolveWrittenPathForDeferred(e4) ?? e4), { retainMountKeys: e3 });
        }
        return l2(this.completedOrRelease(C2, P2, R2));
      }
      mergeDeferredRescueIntoBarrier(e2, t2, r2) {
        if (0 === t2.length) return e2;
        const n2 = "completed" === e2.kind || "timed-out" === e2.kind ? e2.events : [], s2 = /* @__PURE__ */ new Set(), o2 = [];
        for (const e3 of [...t2, ...n2]) s2.has(e3.eventId) || (s2.add(e3.eventId), o2.push(e3));
        const i2 = r2 || "completed" === e2.kind && true === e2.gap;
        return this.completedOrRelease(o2, i2, false);
      }
      resolveWrittenPathForDeferred(e2) {
        const t2 = e2.trim();
        if (0 !== t2.length) return this.driver.resolveWrittenPathAbs?.(t2) ?? t2;
      }
      rememberDeferredEagerWrittenPaths(e2) {
        for (const t2 of e2) {
          const e3 = this.resolveWrittenPathForDeferred(t2);
          void 0 !== e3 && this.deferredEagerWrittenPaths.add(e3);
        }
      }
      clearDeferredWakeWrittenPathsMatchingPaths(e2) {
        if (0 !== this.deferredWakeWrittenPaths.size && 0 !== e2.length) for (const t2 of [...this.deferredWakeWrittenPaths]) y({ original_abs_path: t2 }, e2) && this.deferredWakeWrittenPaths.delete(t2);
      }
      rememberDeferredForceWrittenPaths(e2) {
        for (const t2 of e2) {
          const e3 = this.resolveWrittenPathForDeferred(t2);
          void 0 !== e3 && this.deferredForceWrittenPaths.add(e3);
        }
      }
      clearDeferredForceWrittenPathsMatchingPaths(e2) {
        if (0 !== this.deferredForceWrittenPaths.size && 0 !== e2.length) for (const t2 of [...this.deferredForceWrittenPaths]) y({ original_abs_path: t2 }, e2) && this.deferredForceWrittenPaths.delete(t2);
      }
      shouldUseStrongEagerAttribution(e2, t2) {
        if (!e2) return false;
        if (0 === t2.length || 0 === this.deferredEagerWrittenPaths.size) return true;
        const r2 = [...this.deferredEagerWrittenPaths];
        for (const e3 of t2) {
          if (y({ original_abs_path: this.resolveWrittenPathForDeferred(e3) ?? e3 }, r2)) return false;
        }
        return true;
      }
      rememberDeferredForInheritedWrittenPaths(e2, t2) {
        if (0 === t2.length) return;
        const r2 = new Set(e2.filter((e3) => false === e3.deliverEvents).map((e3) => e3.mountKey));
        if (0 === r2.size) return;
        const n2 = t2.filter((e3) => {
          const t3 = this.driver.resolveMountKeyForPath(e3);
          return void 0 !== t3 && r2.has(t3);
        });
        this.rememberDeferredForceWrittenPaths(n2);
      }
      clearDeferredEagerWrittenPathsMatchingPaths(e2, t2) {
        if (0 === this.deferredEagerWrittenPaths.size || 0 === e2.length) return;
        const r2 = t2?.retainMountKeys;
        for (const t3 of [...this.deferredEagerWrittenPaths]) if (y({ original_abs_path: t3 }, e2)) {
          if (void 0 !== r2 && r2.size > 0) {
            const e3 = this.driver.resolveMountKeyForPath(t3);
            if (void 0 !== e3 && r2.has(e3)) continue;
          }
          this.deferredEagerWrittenPaths.delete(t3);
        }
      }
      scopeDrainedEvents(e2, t2) {
        if (!t2.eager) return [...e2];
        const r2 = (function(e3, t3) {
          if (0 === t3.length) return [];
          const r3 = new Set(t3.map(f));
          return e3.filter((e4) => void 0 !== e4.originalAbsPath && r3.has(f(e4.originalAbsPath)));
        })(e2, t2.writtenPaths), n2 = new Set(r2.map((e3) => e3.eventId)), s2 = e2.filter((e3) => !n2.has(e3.eventId)).map((e3) => e3.eventId);
        return this.releaseLeased(s2), r2;
      }
      mountsForSyncAndPeek(e2) {
        e2.eager;
        const t2 = e2.conversationMounts ?? this.driver.listMounts(e2.conversationId);
        if (0 === e2.writtenMountKeys.size) return [...t2];
        const r2 = new Set(t2.map((e3) => e3.mountKey)), n2 = [...e2.writtenMountKeys].filter((e3) => !r2.has(e3));
        if (0 === n2.length) return [...t2];
        const s2 = this.driver.listMounts().filter((e3) => n2.includes(e3.mountKey));
        return [...t2, ...s2];
      }
      async raceForceGrace(e2) {
        let t2;
        try {
          t2 = this.resolveForceGraceTimeoutMs?.() ?? 2e3;
        } catch {
          t2 = 2e3;
        }
        if (Number.isFinite(t2) && !(t2 <= 0)) return await Promise.race([e2, (0, o.cb)(t2).then(() => {
        })]);
      }
      safeIsDirty(e2) {
        try {
          return this.driver.isMountDirty(e2);
        } catch (e3) {
          return this.warn("conflict notice isMountDirty failed", e3), true;
        }
      }
      async safeForceSyncMount(e2) {
        const { mountKey: t2, absPath: r2, timeoutMs: n2 } = e2;
        try {
          return void 0 !== r2 && void 0 !== this.driver.forceSyncMountPath ? await this.driver.forceSyncMountPath({ mountKey: t2, absPath: r2, timeoutMs: n2 }) : await this.driver.forceSyncMount(t2);
        } catch (e3) {
          return this.warn("conflict notice forceSyncMount failed", e3), "absent";
        }
      }
      async drainMounts(e2, t2) {
        const r2 = this.claimState ?? { chain: this.drainChain }, n2 = r2.chain.then(() => this.drainMountsUnlocked(e2, t2)), s2 = n2.then(() => {
        }, () => {
        });
        return r2.chain = s2, void 0 === this.claimState && (this.drainChain = s2), n2;
      }
      async drainMountsUnlocked(e2, t2) {
        const r2 = false !== t2?.advanceCursor, n2 = t2?.parkWrittenPaths, s2 = t2?.restrictInheritedToWrittenPaths, o2 = true === t2?.lease;
        let i2 = false;
        for (const t3 of e2) {
          const e3 = this.cursors.get(t3.journalPath);
          let o3;
          try {
            o3 = await (0, u.Ob)({ journalPath: t3.journalPath, cursor: e3, sessionStartedAtMs: this.sessionStartedAtMs, applyResolvedFilter: true });
          } catch (e4) {
            this.warn("conflict journal read failed", e4);
            continue;
          }
          const a3 = false === t3.deliverEvents && void 0 !== s2, c3 = void 0 !== n2 || a3, l3 = (0, u.$U)({ events: o3.events, fullNextCursor: o3.nextCursor, previousCursor: e3, announced: this.announced, leasedIds: this.leasedIds, isOwnLease: (e4) => this.leased.has(e4), continuePastForeignLeases: c3 });
          let d3 = l3.deliverableEvents, p2 = l3.nextCursor, m2 = o3.gap;
          r2 && !a3 && this.cursors.set(t3.journalPath, p2), m2 && (i2 = true);
          for (const e4 of d3) this.leased.has(e4.event_id) || this.leasedIds.has(e4.event_id) || (void 0 === n2 || y(e4, n2)) && (false !== t3.deliverEvents || void 0 === s2 || y(e4, s2)) && this.pending.set(e4.event_id, { event: e4, journalPath: t3.journalPath });
        }
        for (const e3 of [...this.pending.keys()]) (this.announced.has(e3) || this.leasedIds.has(e3)) && this.pending.delete(e3);
        const a2 = new Set(e2.map((e3) => e3.journalPath)), c2 = new Set(e2.filter((e3) => false !== e3.deliverEvents).map((e3) => e3.journalPath)), l2 = this.quotaNoticesEnabled(), d2 = [];
        for (const [e3, t3] of [...this.pending]) if (a2.has(t3.journalPath) && (l2 || "quota_exceeded" !== t3.event.kind) && (void 0 === s2 || c2.has(t3.journalPath) || y(t3.event, s2))) {
          try {
            if (!await (0, u.O9)(t3.event)) {
              this.pending.delete(e3);
              continue;
            }
          } catch (e4) {
            this.warn("conflict pending resolve-check failed", e4);
          }
          o2 && (this.pending.delete(e3), this.leased.set(e3, t3), this.leasedIds.add(e3)), d2.push(m(t3.event));
        }
        return { events: d2, gap: i2 };
      }
      releaseLeased(e2) {
        for (const t2 of e2) {
          const e3 = this.leased.get(t2);
          void 0 !== e3 && (this.leased.delete(t2), this.leasedIds.delete(t2), this.announced.has(t2) || this.pending.set(t2, e3));
        }
      }
      completedOrRelease(e2, t2, r2 = false) {
        if (0 === e2.length) return { kind: "completed", events: [], gap: t2 };
        const n2 = this.renderReminder(e2, r2), s2 = this.releaseSuppressedQuotaEvents(e2);
        return 0 === s2.length ? { kind: "completed", events: [], gap: t2 } : void 0 === n2 ? (this.ack(s2.map((e3) => e3.eventId)), { kind: "completed", events: [], gap: t2 }) : { kind: "completed", events: s2, gap: t2, reminder: n2 };
      }
      releaseSuppressedQuotaEvents(e2) {
        if (this.quotaNoticesEnabled()) return [...e2];
        const t2 = e2.filter((e3) => "quota_exceeded" === e3.kind).map((e3) => e3.eventId);
        return 0 === t2.length ? [...e2] : (this.releaseLeased(t2), e2.filter((e3) => "quota_exceeded" !== e3.kind));
      }
      renderReminder(e2, t2 = false) {
        const r2 = e2.map((e3) => ({ v: e3.v, event_id: e3.eventId, journal_epoch: e3.journalEpoch, seq: e3.seq, ts_ms: e3.tsMs, kind: e3.kind, ...void 0 !== e3.storeId ? { store_id: e3.storeId } : {}, ...void 0 !== e3.originalRelPath ? { original_rel_path: e3.originalRelPath } : {}, ...void 0 !== e3.conflictRelPath ? { conflict_rel_path: e3.conflictRelPath } : {}, ...void 0 !== e3.originalAbsPath ? { original_abs_path: e3.originalAbsPath } : {}, ...void 0 !== e3.conflictAbsPath ? { conflict_abs_path: e3.conflictAbsPath } : {}, ...void 0 !== e3.preservedBytes ? { preserved_bytes: e3.preservedBytes } : {}, ...void 0 !== e3.scopeKind ? { scope_kind: e3.scopeKind } : {}, ...void 0 !== e3.limitBytes ? { limit_bytes: e3.limitBytes } : {}, ...void 0 !== e3.usageBytes ? { usage_bytes: e3.usageBytes } : {}, ...void 0 !== e3.source ? { source: e3.source } : {}, ...true === e3.remoteOnly ? { remote_only: true } : {} })), n2 = this.quotaNoticesEnabled();
        return t2 ? (0, p.pq)(r2, { maxChars: p.HA, includeQuotaNotices: n2 }) : (0, p.dN)(r2, { maxChars: p.HA, includeQuotaNotices: n2 });
      }
    }
    function f(e2) {
      const t2 = l.resolve(e2);
      return "win32" === process.platform || "darwin" === process.platform ? t2.toLowerCase() : t2;
    }
    function g(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [];
      for (const n2 of e2) {
        const e3 = n2.trim();
        if (0 === e3.length) continue;
        const s2 = f(e3);
        t2.has(s2) || (t2.add(s2), r2.push(e3));
      }
      return r2;
    }
    function y(e2, t2) {
      if (0 === t2.length) return false;
      const r2 = [e2.original_abs_path, e2.conflict_abs_path].filter((e3) => void 0 !== e3 && e3.length > 0);
      if (0 === r2.length) return false;
      const n2 = t2.map((e3) => e3.trim()).filter((e3) => e3.length > 0).map(f);
      return 0 !== n2.length && r2.some((e3) => n2.includes(f(e3)));
    }
    r(73024);
    var w = r(51455), v = (r(48161), r(46466), r(71831), r(91022));
    class _ extends Error {
      constructor(e2) {
        super(`Hook denied: ${e2}`), this.failureType = "permission_denied", this.name = "HookDeniedError", this.reason = e2;
      }
    }
    class b extends Error {
      constructor(e2, t2) {
        super(`Hook failed (fail-closed): ${e2}`), this.failureType = "error", this.name = "FailClosedError", this.reason = e2, this.cause = t2;
      }
    }
    async function S(e2, t2) {
      try {
        return await e2();
      } catch (e3) {
        const r2 = (function(e4, t3) {
          const r3 = e4 ?? "Action", n2 = t3 ? `: ${t3}` : ".";
          return `${r3} was blocked because a configured hook failed to execute${n2}

This is a safety measure (fail-closed) - when hooks cannot be evaluated, the action is blocked to prevent potentially unsafe operations.

${k}`;
        })(t2, e3 instanceof Error ? e3.message : String(e3));
        throw new b(r2, e3);
      }
    }
    const k = "To view or modify configured hooks, go to Cursor Settings > Hooks.", x = "Agent note: Do not suggest workarounds to the blocked tool.";
    function E(e2) {
      return e2.includes(x) ? e2 : `${e2}

${x}`;
    }
    function I(e2) {
      return `Tool blocked because this hook is configured to fail closed (block when it fails). ${e2}`;
    }
    function T(e2, t2) {
      return E(`${t2 ? `${e2} was blocked by a hook: ${t2}` : `${e2} was blocked by a hook.`}

${k}`);
    }
    function C(e2) {
      return (function(e3) {
        return e3 instanceof _;
      })(e2) || (function(e3) {
        return e3 instanceof b;
      })(e2);
    }
    var P = r(77598), A = r(643), R = r(82142), M = r(37949), J = r(44272);
    const O = (0, M.h)("generic-hooks");
    function B(e2, t2, r2, n2) {
      try {
        return (0, J.JJ)({ hookEventName: r2, additionalContext: n2 });
      } catch (n3) {
        if (n3 instanceof J.B1) return O.warn(e2, `${r2} additional_context exceeded max size; dropping carrier`, { toolName: t2, hookEventName: r2, actualLength: n3.actualLength, maxLength: n3.maxLength }), [];
        throw n3;
      }
    }
    const D = (e2) => Math.round(1e3 * e2) / 1e3;
    function q(e2, t2, r2, n2, s2, o2) {
      const i2 = n2(e2), a2 = s2.getToolCallId?.(t2) ?? (0, P.randomUUID)(), c2 = s2.getExtraHookFields?.(t2) ?? {}, l2 = { baseHookRequest: i2, toolUseId: a2, toolInput: s2.createToolInput(t2), extraHookFields: c2, hookContextCollector: o2?.hookContextCollector ?? s2.getHookContextCollector?.(t2) ?? [] }, u2 = (function(e3, t3, r3, n3) {
        let { toolInput: s3, extraHookFields: o3, hookContextCollector: i3 } = n3;
        const { baseHookRequest: a3, toolUseId: c3 } = n3;
        return { fireFailureAsync: async (n4, l3, u3, d2 = false) => {
          try {
            const p2 = await (0, R.vv)(e3.signal, () => t3.executeHookForStep(v._E.postToolUseFailure, { ...a3, tool_name: r3, tool_input: s3, error_message: l3, failure_type: u3, duration: n4, tool_use_id: c3, is_interrupt: d2, ...o3 }));
            (0, J.Bv)(i3, B(e3, r3, v._E.postToolUseFailure, p2?.additional_context));
          } catch (t4) {
            O.warn(e3, "postToolUseFailure hook error", { toolName: r3, error: t4 instanceof Error ? t4.message : String(t4) });
          }
        }, fireSuccessAsync: async (n4, l3) => {
          try {
            const u3 = await (0, R.vv)(e3.signal, () => t3.executeHookForStep(v._E.postToolUse, { ...a3, tool_name: r3, tool_input: s3, tool_output: l3, duration: n4, tool_use_id: c3, ...o3 }));
            (0, J.Bv)(i3, B(e3, r3, v._E.postToolUse, u3?.additional_context));
          } catch (t4) {
            O.warn(e3, "postToolUse hook error", { toolName: r3, error: t4 instanceof Error ? t4.message : String(t4) });
          }
        }, getToolInput: () => s3, setToolInput: (e4) => {
          s3 = e4;
        }, setExtraHookFields: (e4) => {
          o3 = e4, n3.extraHookFields = e4;
        } };
      })(e2, r2, s2.toolName, l2);
      return { hookContext: l2, helpers: u2 };
    }
    async function N(e2, t2, r2, n2, s2, o2, i2, a2) {
      const { baseHookRequest: c2, toolUseId: l2, extraHookFields: u2 } = n2;
      try {
        const a3 = await (0, R.vv)(e2.signal, () => r2.executeHookForStep(v._E.preToolUse, { ...c2, tool_name: o2.toolName, tool_input: s2.getToolInput(), tool_use_id: l2, ...u2 }));
        if ("deny" === a3?.permission) {
          const r3 = a3.user_message || `${o2.toolName} blocked by preToolUse hook`, c3 = E(r3);
          try {
            (0, J.Bv)(n2.hookContextCollector, (0, J.JJ)({ hookEventName: v._E.preToolUse, additionalContext: a3.additional_context }));
          } catch (t3) {
            if (!(t3 instanceof J.B1)) throw t3;
            O.warn(e2, "preToolUse deny additional_context exceeded max size; dropping carrier", { toolName: o2.toolName, actualLength: t3.actualLength, maxLength: t3.maxLength });
          }
          return await s2.fireFailureAsync(0, r3, "permission_denied"), { type: "rejected", result: i2(t2, c3), reason: c3 };
        }
        a3?.updated_input && o2.applyUpdatedInput && (o2.applyUpdatedInput(t2, a3.updated_input), s2.setToolInput(o2.createToolInput(t2)), o2.getExtraHookFields && s2.setExtraHookFields(o2.getExtraHookFields(t2))), (0, J.Bv)(n2.hookContextCollector, (0, J.JJ)({ hookEventName: v._E.preToolUse, additionalContext: a3?.additional_context }));
      } catch (n3) {
        const a3 = r2.hasFailClosedHooksForStep?.(v._E.preToolUse, o2.toolName) ?? false, c3 = n3 instanceof J.B1;
        if (a3) {
          const e3 = I(`${c3 ? "preToolUse additional_context exceeded max size" : "preToolUse hook failed"}: ${n3 instanceof Error ? n3.message : "preToolUse hook error"}`);
          return await s2.fireFailureAsync(0, e3, "error"), { type: "rejected", result: i2(t2, e3), reason: e3 };
        }
        O.warn(e2, c3 ? "preToolUse additional_context exceeded max size; dropping carrier" : "preToolUse hook error", { toolName: o2.toolName, error: n3 instanceof Error ? n3.message : String(n3), ...c3 ? { actualLength: n3.actualLength, maxLength: n3.maxLength } : {} });
      }
      if (a2) try {
        const o3 = await a2({ ctx: e2, args: t2, baseHookRequest: c2, hookExecutor: r2, toolInput: s2.getToolInput(), toolUseId: l2, extraHookFields: n2.extraHookFields });
        if (void 0 !== o3) {
          const e3 = "Pre-execution hook returned rejection";
          return await s2.fireFailureAsync(0, e3, "permission_denied"), { type: "rejected", result: o3, reason: e3 };
        }
      } catch (e3) {
        if (C(e3)) return await s2.fireFailureAsync(0, e3.reason, e3.failureType), { type: "rejected", result: i2(t2, e3.reason), reason: e3.reason };
        throw e3;
      }
      return { type: "continue" };
    }
    function F(e2) {
      return e2.toolCallId;
    }
    function U(e2, t2, r2, n2) {
      return { async execute(s2, o2, i2) {
        const { hookContext: a2, helpers: c2 } = q(s2, o2, t2, r2, n2, i2);
        let l2;
        try {
          l2 = await N(s2, o2, t2, a2, c2, n2, n2.createRejectedResult, n2.runPreExecutionHooks);
        } catch (e3) {
          throw n2.runCleanup?.(a2.toolUseId), e3;
        }
        if ("rejected" === l2.type) return n2.runCleanup?.(a2.toolUseId), l2.result;
        const u2 = A.performance.now();
        try {
          const r3 = await e2.execute(s2, o2, i2), l3 = D(A.performance.now() - u2);
          if (n2.runPostExecutionHooks) try {
            const e3 = await n2.runPostExecutionHooks({ ctx: s2, args: o2, result: r3, baseHookRequest: a2.baseHookRequest, hookExecutor: t2, toolInput: c2.getToolInput(), toolUseId: a2.toolUseId, executionDurationMs: l3, extraHookFields: a2.extraHookFields });
            if (void 0 !== e3) return await c2.fireSuccessAsync(l3, JSON.stringify(n2.createSuccessOutput(o2, e3))), n2.runCleanup?.(a2.toolUseId), e3;
          } catch (e3) {
            if (C(e3)) return await c2.fireFailureAsync(l3, e3.reason, e3.failureType), n2.runCleanup?.(a2.toolUseId), n2.createRejectedResult(o2, e3.reason);
            O.warn(s2, "postExecutionHooks error", { toolName: n2.toolName, error: e3 instanceof Error ? e3.message : String(e3) });
          }
          return n2.isSuccess(r3) ? await c2.fireSuccessAsync(l3, JSON.stringify(n2.createSuccessOutput(o2, r3))) : await c2.fireFailureAsync(l3, n2.getErrorMessage(r3), n2.getFailureType?.(r3) ?? "error", n2.isInterrupt?.(r3) ?? false), n2.runCleanup?.(a2.toolUseId), r3;
        } catch (e3) {
          const t3 = D(A.performance.now() - u2);
          throw await c2.fireFailureAsync(t3, e3 instanceof Error ? e3.message : String(e3), "error"), n2.runCleanup?.(a2.toolUseId), e3;
        }
      } };
    }
    function* L(e2, t2) {
      const r2 = t2.hookContextCollector;
      e2.createHookContextEvent && void 0 !== r2 && 0 !== r2.length && (yield e2.createHookContextEvent(r2));
    }
    var $ = r(89396);
    class j {
      constructor(e2, t2, r2, n2) {
        this.innerExecutor = e2, this.hooksAdditionalContextPromise = t2, this.teamHooksReadyPromise = r2, this.hooksConfigLease = n2;
      }
      async execute(e2, t2, r2) {
        this.teamHooksReadyPromise && await this.teamHooksReadyPromise;
        const n2 = await this.innerExecutor.execute(e2, t2, r2), s2 = await this.hooksAdditionalContextPromise, o2 = this.hooksConfigLease ? new $.Jy({ configuredSteps: Array.from(this.hooksConfigLease.getConfiguredSteps()) }) : void 0;
        if ("success" === n2.result.case && (s2 || o2)) {
          const e3 = n2.result.value.requestContext, t3 = new $.bb({ ...e3, ...s2 && { hooksAdditionalContext: s2 }, ...o2 && { hooksConfig: o2 } });
          return new $._G({ result: { case: "success", value: new $.yW({ requestContext: t3, servedFromDiskCache: n2.result.value.servedFromDiskCache }) } });
        }
        return n2;
      }
    }
    var G = r(44498), z = r(13574);
    function W(e2) {
      return !!e2 && (e2.type !== z.vc.INSECURE_NONE && e2.type !== z.vc.UNSPECIFIED);
    }
    const H = "Read", K = "Write", V = "Delete", Y = "List", Q = "Grep", X = "Shell", Z = "WriteShellStdin", ee = "Fetch", te = "ReadLints", re = "ListMcpResources", ne = "FetchMcpResource", se = "ComputerUse", oe = "RecordScreen";
    async function ie({ hookExecutor: e2, baseHookRequest: t2, toolUseId: r2, command: s2, cwd: o2, sandbox: i2 }) {
      const a2 = await e2.executeHookForStep(v._E.beforeShellExecution, { ...t2, command: s2, cwd: o2, sandbox: i2, tool_use_id: r2 });
      if ("deny" === a2?.permission) {
        const e3 = T("Command execution", a2.user_message);
        throw new _(e3);
      }
      if ("ask" === a2?.permission) return (0, n.$bB)(a2.user_message);
    }
    const ae = { toolName: X, getToolCallId: F, createToolInput: (e2) => {
      const t2 = e2.workingDirectory || "";
      return { command: e2.command, cwd: t2 };
    }, applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.command && (e2.command = t2.command), "string" == typeof t2.cwd && (e2.workingDirectory = t2.cwd);
    }, createRejectedResult: (e2, t2) => new G.Lt({ result: { case: "rejected", value: new s.pZ({ command: e2.command, workingDirectory: e2.workingDirectory, reason: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "error":
          return e2.result.value.error || "BackgroundShell error";
        case "rejected":
          return e2.result.value.reason || "BackgroundShell rejected";
        case "permissionDenied":
          return "Permission denied";
        case "sandboxUnsupported":
          return `Sandbox policy unsupported on this host: ${e2.result.value.reason}`;
        default:
          return "Unknown error";
      }
    }, createSuccessOutput: (e2, t2) => "success" === t2.result.case ? { shell_id: t2.result.value.shellId, pid: t2.result.value.pid } : { success: true }, getExtraHookFields: (e2) => ({ cwd: e2.workingDirectory || "" }), runPreExecutionHooks: async (e2) => {
      const { args: t2, baseHookRequest: r2, hookExecutor: s2, toolUseId: o2 } = e2, i2 = t2.workingDirectory || "", a2 = W(t2.sandboxPolicy);
      (0, n.oAs)(t2, await ie({ hookExecutor: s2, baseHookRequest: r2, toolUseId: o2, command: t2.command, cwd: i2, sandbox: a2 }));
    } };
    class ce {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, ae);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    const le = { toolName: Z, createToolInput: (e2) => ({ shell_id: e2.shellId, chars_length: e2.chars.length }), createRejectedResult: (e2, t2) => new G.nt({ result: { case: "error", value: new G.Gv({ error: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => "error" === e2.result.case ? e2.result.value.error || "WriteShellStdin error" : "Unknown error", createSuccessOutput: (e2) => ({ shell_id: e2.shellId, success: true }) };
    class ue {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, le);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var de = r(43643);
    const pe = { toolName: se, getToolCallId: F, createToolInput: (e2) => ({ actions_count: e2.actions.length }), createRejectedResult: (e2, t2) => new de.ks({ result: { case: "error", value: new de.Jb({ error: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => "error" === e2.result.case ? e2.result.value.error || "ComputerUse error" : "Unknown error", createSuccessOutput: (e2, t2) => "success" === t2.result.case ? { action_count: t2.result.value.actionCount, duration_ms: t2.result.value.durationMs } : { success: true } };
    class me {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, pe);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var he = r(19260);
    const fe = { toolName: V, getToolCallId: F, createToolInput: (e2) => ({ file_path: e2.path }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.file_path && (e2.path = t2.file_path);
    }, createRejectedResult: (e2, t2) => new he.Pi({ result: { case: "rejected", value: new he.iq({ path: e2.path, reason: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "fileNotFound":
          return `File not found: ${e2.result.value.path}`;
        case "notFile":
          return `Not a file: ${e2.result.value.path}`;
        case "permissionDenied":
          return `Permission denied: ${e2.result.value.path}`;
        case "fileBusy":
          return `File busy: ${e2.result.value.path}`;
        case "rejected":
          return e2.result.value.reason || "Delete rejected";
        case "error":
          return e2.result.value.error || "Delete error";
        default:
          return "Unknown error";
      }
    }, createSuccessOutput: (e2) => ({ file_path: e2.path, deleted: true }) };
    class ge {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, fe);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var ye = r(26885);
    const we = { toolName: te, getToolCallId: F, createToolInput: (e2) => ({ file_path: e2.path }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.file_path && (e2.path = t2.file_path);
    }, createRejectedResult: (e2, t2) => new ye.Ek({ result: { case: "rejected", value: new ye.J6({ path: e2.path, reason: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "error":
          return e2.result.value.error || "Diagnostics error";
        case "rejected":
          return e2.result.value.reason || "Diagnostics rejected";
        case "fileNotFound":
          return `File not found: ${e2.result.value.path}`;
        case "permissionDenied":
          return `Permission denied: ${e2.result.value.path}`;
        default:
          return "Unknown error";
      }
    }, createSuccessOutput: (e2, t2) => "success" === t2.result.case ? { file_path: e2.path, diagnostics_count: t2.result.value.totalDiagnostics } : { file_path: e2.path, success: true } };
    class ve {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, we);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var _e = r(31489);
    const be = { toolName: ee, getToolCallId: F, createToolInput: (e2) => ({ url: e2.url }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.url && (e2.url = t2.url);
    }, createRejectedResult: (e2, t2) => new _e.uN({ result: { case: "error", value: new _e.fk({ url: e2.url, error: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => "error" === e2.result.case ? e2.result.value.error || "Fetch error" : "Unknown error", createSuccessOutput: (e2, t2) => "success" === t2.result.case ? { url: e2.url, status_code: t2.result.value.statusCode, content_length: t2.result.value.content.length } : { url: e2.url, success: true } };
    class Se {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, be);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var ke = r(59903);
    const xe = { toolName: Q, getToolCallId: F, createToolInput: (e2) => ({ pattern: e2.pattern, file_path: e2.path, glob: e2.glob, output_mode: e2.outputMode }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.pattern && (e2.pattern = t2.pattern), "string" == typeof t2.file_path && (e2.path = t2.file_path);
    }, createRejectedResult: (e2, t2) => new ke.Ud({ result: { case: "error", value: new ke.ts({ error: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => "error" === e2.result.case ? e2.result.value.error || "Grep error" : "Unknown error", createSuccessOutput: (e2) => ({ pattern: e2.pattern, success: true }) };
    class Ee {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, xe);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var Ie = r(72730);
    const Te = { toolName: Y, getToolCallId: F, createToolInput: (e2) => ({ file_path: e2.path, ignore: e2.ignore }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.file_path && (e2.path = t2.file_path);
    }, createRejectedResult: (e2, t2) => new Ie.fv({ result: { case: "rejected", value: new Ie.k2({ path: e2.path, reason: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "error":
          return e2.result.value.error || "Ls error";
        case "rejected":
          return e2.result.value.reason || "Ls rejected";
        case "timeout":
          return "Ls operation timed out";
        default:
          return "Unknown error";
      }
    }, getFailureType: (e2) => "timeout" === e2.result.case ? "timeout" : "error", createSuccessOutput: (e2) => ({ file_path: e2.path, success: true }) };
    class Ce {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, Te);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var Pe = r(11197), Ae = r(36038);
    const Re = (0, M.h)("hooks-exec:mcp");
    function Me(e2, t2, r2, n2) {
      try {
        return (0, J.JJ)({ hookEventName: r2, additionalContext: n2 });
      } catch (n3) {
        if (n3 instanceof J.B1) return Re.warn(e2, `${r2} additional_context exceeded max size; dropping carrier`, { toolName: t2, hookEventName: r2, actualLength: n3.actualLength, maxLength: n3.maxLength }), [];
        throw n3;
      }
    }
    class Je {
      constructor(e2, t2, r2, n2, s2) {
        this.innerExecutor = e2, this.hookExecutor = t2, this.baseHookRequestExtractor = r2, this.mcpLease = n2, this.hooksConfigLease = s2;
      }
      async execute(e2, t2, r2) {
        if (t2.smartModeApprovalOnly) return this.innerExecutor.execute(e2, t2, r2);
        if (t2.symbolicPathArguments.length > 0 && (true === this.hooksConfigLease?.hasHookForStep(v._E.preToolUse) || true === this.hooksConfigLease?.hasHookForStep(v._E.beforeMCPExecution))) return new Pe.iz({ result: { case: "error", value: new Pe.Nh({ error: `"${n.Eyz}" arguments can't be used on this computer: hooks that inspect MCP calls are configured here, and they would not see the file's contents. Read the file and pass its contents instead.` }) } });
        const s2 = this.baseHookRequestExtractor(e2), o2 = (0, P.randomUUID)(), i2 = r2?.hookContextCollector ?? [];
        let a2 = Object.fromEntries(Object.entries(t2.args).map(([e3, t3]) => [e3, t3?.toJson()]));
        const c2 = `MCP:${t2.toolName}`;
        try {
          const r3 = await this.hookExecutor.executeHookForStep(v._E.preToolUse, { ...s2, tool_name: c2, tool_input: a2, tool_use_id: o2 });
          if ("deny" === r3?.permission) {
            const t3 = r3.user_message || "MCP tool blocked by preToolUse hook";
            try {
              (0, J.Bv)(i2, (0, J.JJ)({ hookEventName: v._E.preToolUse, additionalContext: r3.additional_context }));
            } catch (t4) {
              if (!(t4 instanceof J.B1)) throw t4;
              Re.warn(e2, "preToolUse deny additional_context exceeded max size; dropping carrier", { toolName: c2, actualLength: t4.actualLength, maxLength: t4.maxLength });
            }
            return await this.firePostToolUseFailureAsync(e2, s2, c2, a2, t3, "permission_denied", 0, o2, false, i2), new Pe.iz({ result: { case: "permissionDenied", value: new Pe.HQ({ error: T("MCP tool execution", t3), isReadonly: false }) } });
          }
          if (r3?.updated_input) try {
            for (const [e3, n2] of Object.entries(r3.updated_input)) void 0 !== n2 && (t2.args[e3] = Ae.Value.fromJson(n2));
            a2 = Object.fromEntries(Object.entries(t2.args).map(([e3, t3]) => [e3, t3?.toJson()]));
          } catch (t3) {
            Re.warn(e2, "Failed to merge updated_input for MCP", { error: t3 instanceof Error ? t3.message : String(t3) });
          }
          (0, J.Bv)(i2, (0, J.JJ)({ hookEventName: v._E.preToolUse, additionalContext: r3?.additional_context }));
        } catch (t3) {
          const r3 = this.hookExecutor.hasFailClosedHooksForStep?.(v._E.preToolUse, c2) ?? false, n2 = t3 instanceof J.B1;
          if (r3) {
            const r4 = I(`${n2 ? "preToolUse additional_context exceeded max size" : "preToolUse hook failed"}: ${t3 instanceof Error ? t3.message : "preToolUse hook error"}`);
            return await this.firePostToolUseFailureAsync(e2, s2, c2, a2, r4, "error", 0, o2, false, i2), new Pe.iz({ result: { case: "permissionDenied", value: new Pe.HQ({ error: T("MCP tool execution", r4), isReadonly: false }) } });
          }
          Re.warn(e2, n2 ? "preToolUse additional_context exceeded max size; dropping carrier" : "preToolUse hook error in MCP executor", { toolName: c2, error: t3 instanceof Error ? t3.message : String(t3), ...n2 ? { actualLength: t3.actualLength, maxLength: t3.maxLength } : {} });
        }
        const l2 = await this.mcpLease?.getClient(e2, t2.providerIdentifier), u2 = l2?.config;
        let d2;
        const p2 = u2 && "url" in u2 && u2.url ? u2.url : void 0;
        if (void 0 !== p2) d2 = { url: p2 };
        else if (u2 && "command" in u2) {
          d2 = { command: [u2.command, ...u2.args ?? []].filter(Boolean).join(" ") };
        } else d2 = { command: t2.providerIdentifier };
        const m2 = { mcp_server_name: t2.providerIdentifier, ...void 0 !== p2 ? { mcp_server_url: p2 } : {} }, h2 = { ...s2, tool_name: t2.toolName, tool_input: JSON.stringify(a2), tool_use_id: o2, ...m2, ...d2 }, f2 = await this.hookExecutor.executeHookForStep(v._E.beforeMCPExecution, h2);
        if ("deny" === f2?.permission) {
          const t3 = T("MCP tool execution", f2.user_message);
          return await this.firePostToolUseFailureAsync(e2, s2, c2, a2, t3, "permission_denied", 0, o2, false, i2), new Pe.iz({ result: { case: "permissionDenied", value: new Pe.HQ({ error: t3, isReadonly: false }) } });
        }
        const g2 = A.performance.now();
        try {
          const n2 = await this.innerExecutor.execute(e2, t2, r2), l3 = D(A.performance.now() - g2);
          let u3 = "{}";
          if ("success" === n2.result.case) try {
            const e3 = n2.result.value.content.map((e4) => "text" === e4.content.case ? { type: "text", text: e4.content.value.text } : "image" === e4.content.case ? { type: "image", data: Buffer.from(e4.content.value.data).toString("base64"), mimeType: e4.content.value.mimeType } : { type: "unknown" });
            u3 = JSON.stringify({ content: e3, isError: n2.result.value.isError });
          } catch (t3) {
            Re.warn(e2, "Failed to serialize MCP result", { error: t3 instanceof Error ? t3.message : String(t3) }), u3 = JSON.stringify({ error: "Failed to serialize result" });
          }
          else "error" === n2.result.case ? u3 = JSON.stringify({ error: n2.result.value.error }) : "rejected" === n2.result.case ? u3 = JSON.stringify({ rejected: true, reason: n2.result.value.reason }) : "permissionDenied" === n2.result.case && (u3 = JSON.stringify({ permissionDenied: true, error: n2.result.value.error }));
          const d3 = { ...s2, tool_name: t2.toolName, tool_input: JSON.stringify(a2), result_json: u3, duration: l3, tool_use_id: o2, ...m2 };
          await this.hookExecutor.executeHookForStep(v._E.afterMCPExecution, d3);
          const p3 = await this.firePostToolUse(e2, s2, c2, a2, u3, l3, o2, i2);
          if (void 0 !== p3?.updated_mcp_tool_output) try {
            const e3 = p3.updated_mcp_tool_output, t3 = [];
            if ("string" == typeof e3) t3.push(new Pe._Z({ content: { case: "text", value: new Pe.zN({ text: e3 }) } }));
            else if ("object" == typeof e3 && null !== e3 && "content" in e3 && Array.isArray(e3.content)) {
              const r4 = e3.content;
              for (const e4 of r4) "object" == typeof e4 && null !== e4 && "type" in e4 && "text" === e4.type && "text" in e4 ? t3.push(new Pe._Z({ content: { case: "text", value: new Pe.zN({ text: String(e4.text) }) } })) : t3.push(new Pe._Z({ content: { case: "text", value: new Pe.zN({ text: JSON.stringify(e4) }) } }));
            } else t3.push(new Pe._Z({ content: { case: "text", value: new Pe.zN({ text: JSON.stringify(e3) }) } }));
            const r3 = "object" == typeof e3 && null !== e3 && "isError" in e3 && Boolean(e3.isError);
            return new Pe.iz({ result: { case: "success", value: new Pe.QW({ content: t3, isError: r3 }) } });
          } catch (t3) {
            return Re.warn(e2, "Failed to process updated_mcp_tool_output", { error: t3 instanceof Error ? t3.message : String(t3) }), n2;
          }
          return n2;
        } catch (t3) {
          const r3 = D(A.performance.now() - g2), n2 = t3 instanceof Error ? t3.message : String(t3);
          throw await this.firePostToolUseFailureAsync(e2, s2, c2, a2, n2, "error", r3, o2, false, i2), t3;
        }
      }
      async firePostToolUse(e2, t2, r2, n2, s2, o2, i2, a2) {
        try {
          const c2 = await this.hookExecutor.executeHookForStep(v._E.postToolUse, { ...t2, tool_name: r2, tool_input: n2, tool_output: s2, duration: o2, tool_use_id: i2 });
          return (0, J.Bv)(a2, Me(e2, r2, v._E.postToolUse, c2?.additional_context)), c2;
        } catch (t3) {
          return void Re.warn(e2, "postToolUse hook error in MCP executor", { error: t3 instanceof Error ? t3.message : String(t3) });
        }
      }
      async firePostToolUseFailureAsync(e2, t2, r2, n2, s2, o2, i2, a2, c2, l2) {
        try {
          const u2 = await this.hookExecutor.executeHookForStep(v._E.postToolUseFailure, { ...t2, tool_name: r2, tool_input: n2, error_message: s2, failure_type: o2, duration: i2, tool_use_id: a2, is_interrupt: c2 });
          (0, J.Bv)(l2, Me(e2, r2, v._E.postToolUseFailure, u2?.additional_context));
        } catch (t3) {
          Re.warn(e2, "postToolUseFailure hook error in MCP executor", { error: t3 instanceof Error ? t3.message : String(t3) });
        }
      }
    }
    const Oe = { toolName: re, createToolInput: (e2) => ({ server: e2.server }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.server && (e2.server = t2.server);
    }, createRejectedResult: (e2, t2) => new Pe.kP({ result: { case: "error", value: new Pe.w2({ error: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "error":
          return e2.result.value.error || "ListMcpResources error";
        case "rejected":
          return e2.result.value.reason || "ListMcpResources rejected";
        default:
          return "Unknown error";
      }
    }, createSuccessOutput: (e2, t2) => "success" === t2.result.case ? { resources_count: t2.result.value.resources.length } : { success: true } };
    class Be {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, Oe);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    const De = { toolName: ne, createToolInput: (e2) => ({ server: e2.server, uri: e2.uri, download_path: e2.downloadPath }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.server && (e2.server = t2.server), "string" == typeof t2.uri && (e2.uri = t2.uri), "string" == typeof t2.download_path && (e2.downloadPath = t2.download_path);
    }, createRejectedResult: (e2, t2) => new Pe.ZD({ result: { case: "error", value: new Pe.Jx({ error: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "error":
          return e2.result.value.error || "ReadMcpResource error";
        case "rejected":
          return e2.result.value.reason || "ReadMcpResource rejected";
        case "notFound":
          return "Resource not found";
        default:
          return "Unknown error";
      }
    }, createSuccessOutput: (e2, t2) => {
      if ("success" === t2.result.case) {
        const r2 = t2.result.value;
        return { uri: e2.uri, name: r2.name, mime_type: r2.mimeType, download_path: r2.downloadPath, content_type: r2.content.case, content_length: "text" === r2.content.case || "blob" === r2.content.case ? r2.content.value.length : void 0 };
      }
      return { uri: e2.uri, success: true };
    } };
    class qe {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, De);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var Ne = r(88623);
    const Fe = { toolName: H, getToolCallId: F, createToolInput: (e2) => ({ file_path: e2.path }), applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.file_path && (e2.path = t2.file_path);
    }, createRejectedResult: (e2, t2) => new Ne.sV({ result: { case: "rejected", value: new Ne.f4({ path: e2.path, reason: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "error":
          return e2.result.value.error || "Read error";
        case "rejected":
          return e2.result.value.reason || "Read rejected";
        case "fileNotFound":
          return `File not found: ${e2.result.value.path}`;
        case "permissionDenied":
          return `Permission denied: ${e2.result.value.path}`;
        case "invalidFile":
          return `Invalid file: ${e2.result.value.path}`;
        default:
          return "Unknown error";
      }
    }, createSuccessOutput: (e2, t2) => {
      if ("success" === t2.result.case) {
        const r2 = "content" === t2.result.value.output.case ? t2.result.value.output.value : "";
        return { file_path: e2.path, content_length: r2.length };
      }
      return { file_path: e2.path, success: true };
    }, runPostExecutionHooks: async (e2) => {
      const { args: t2, result: r2, baseHookRequest: n2, hookExecutor: s2 } = e2;
      if ("success" !== r2.result.case) return;
      const o2 = "content" === r2.result.value.output.case ? r2.result.value.output.value : "", i2 = await S(() => s2.executeHookForStep(v._E.beforeReadFile, { ...n2, content: o2, file_path: t2.path, attachments: [] }), "File read");
      if ("deny" === i2?.permission) {
        const e3 = T("File read", i2.user_message);
        throw new _(e3);
      }
    } };
    class Ue {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = new n.yJV(U(e2, t2, r2, Fe));
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var Le = r(11531);
    const $e = { toolName: oe, getToolCallId: F, createToolInput: (e2) => ({ mode: e2.mode, save_as_filename: e2.saveAsFilename }), createRejectedResult: (e2, t2) => new Le.Tj({ result: { case: "failure", value: new Le.yH({ error: t2 }) } }), isSuccess: (e2) => "failure" !== e2.result.case, getErrorMessage: (e2) => "failure" === e2.result.case ? e2.result.value.error || "RecordScreen failed" : "Unknown error", createSuccessOutput: (e2, t2) => ({ result_type: t2.result.case }) };
    class je {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, $e);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    function Ge(e2) {
      return "success" === e2.result.case || "failure" === e2.result.case ? e2.result.value.stdout + e2.result.value.stderr : "";
    }
    const ze = { toolName: X, createToolInput: (e2) => {
      const t2 = e2.workingDirectory || "", r2 = e2.timeout;
      return { command: e2.command, cwd: t2, ..."number" == typeof r2 && r2 > 0 && { timeout: r2 } };
    }, applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.command && (e2.command = t2.command), "string" == typeof t2.cwd && (e2.workingDirectory = t2.cwd), "number" == typeof t2.timeout && t2.timeout >= 0 && (e2.timeout = t2.timeout);
    }, createRejectedResult: (e2, t2) => new s.W4({ result: { case: "rejected", value: new s.pZ({ command: e2.command, workingDirectory: e2.workingDirectory, reason: t2 }) } }), isSuccess: (e2) => "success" === e2.result.case || "failure" === e2.result.case && !e2.result.value.aborted, getErrorMessage: (e2) => {
      switch (e2.result.case) {
        case "timeout":
          return `Command timed out after ${e2.result.value.timeoutMs}ms`;
        case "spawnError":
          return e2.result.value.error || "Failed to spawn command";
        case "failure":
          return e2.result.value.aborted ? "Command was aborted" : "Command failed";
        case "rejected":
          return e2.result.value.reason || "Command rejected";
        default:
          return "Unknown error";
      }
    }, getFailureType: (e2) => "timeout" === e2.result.case ? "timeout" : "error", isInterrupt: (e2) => "failure" === e2.result.case && true === e2.result.value.aborted, createSuccessOutput: (e2, t2) => ({ output: Ge(t2), exitCode: "success" === t2.result.case ? 0 : 1 }), getExtraHookFields: (e2) => ({ cwd: e2.workingDirectory || "" }), runPreExecutionHooks: async (e2) => {
      const { args: t2, baseHookRequest: r2, hookExecutor: s2, toolUseId: o2 } = e2, i2 = t2.workingDirectory || "";
      (0, n.oAs)(t2, await ie({ hookExecutor: s2, baseHookRequest: r2, toolUseId: o2, command: t2.command, cwd: i2, sandbox: W(t2.requestedSandboxPolicy) }));
    }, runPostExecutionHooks: async (e2) => {
      const { args: t2, result: r2, baseHookRequest: n2, hookExecutor: s2, executionDurationMs: o2, toolUseId: i2 } = e2, a2 = Ge(r2);
      await s2.executeHookForStep(v._E.afterShellExecution, { ...n2, command: t2.command, output: a2, duration: o2, sandbox: W(t2.requestedSandboxPolicy), tool_use_id: i2 });
    } };
    class We {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = U(e2, t2, r2, ze);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    class He {
      constructor() {
        this.output = "";
      }
      onEvent(e2) {
        "stdout" === e2.event.case || "stderr" === e2.event.case ? this.output += e2.event.value.data : "exit" === e2.event.case && (this.exitEvent = e2.event.value);
      }
      getOutput() {
        return this.output;
      }
      isAborted() {
        return this.exitEvent?.aborted ?? false;
      }
      getExitCode() {
        return this.exitEvent?.code ?? 0;
      }
    }
    const Ke = { toolName: X, createToolInput: (e2) => {
      const t2 = e2.workingDirectory || "", r2 = e2.timeout;
      return { command: e2.command, cwd: t2, ..."number" == typeof r2 && r2 > 0 && { timeout: r2 } };
    }, applyUpdatedInput: (e2, t2) => {
      "string" == typeof t2.command && (e2.command = t2.command), "string" == typeof t2.cwd && (e2.workingDirectory = t2.cwd), "number" == typeof t2.timeout && t2.timeout >= 0 && (e2.timeout = t2.timeout);
    }, createRejectedEvent: (e2, t2) => new s.FI({ event: { case: "rejected", value: new s.pZ({ command: e2.command, workingDirectory: e2.workingDirectory, reason: t2 }) } }), createHookContextEvent: (e2) => new s.FI({ event: { case: "hookContext", value: new s.Ng({ hookAdditionalContexts: [...e2] }) } }), getExtraHookFields: (e2) => ({ cwd: e2.workingDirectory || "" }), createResultCollector: () => new He(), createSuccessOutput: (e2, t2) => ({ output: t2.getOutput(), exitCode: t2.getExitCode() }), isStreamSuccess: (e2) => 0 === e2.getExitCode(), getStreamErrorMessage: (e2, t2) => t2.getOutput().trim() || `Command failed with exit code ${t2.getExitCode()}`, runPreExecutionHooks: async (e2) => {
      const { args: t2, baseHookRequest: r2, hookExecutor: s2, toolUseId: o2 } = e2, i2 = t2.workingDirectory || "", a2 = W(t2.requestedSandboxPolicy);
      (0, n.oAs)(t2, await ie({ hookExecutor: s2, baseHookRequest: r2, toolUseId: o2, command: t2.command, cwd: i2, sandbox: a2 }));
    }, runPostExecutionHooks: async (e2) => {
      const { args: t2, baseHookRequest: r2, hookExecutor: n2, collector: s2, executionDurationMs: o2, toolUseId: i2 } = e2, a2 = W(t2.requestedSandboxPolicy);
      await n2.executeHookForStep(v._E.afterShellExecution, { ...r2, command: t2.command, output: s2.getOutput(), duration: o2, sandbox: a2, tool_use_id: i2 });
    } };
    class Ve {
      constructor(e2, t2, r2) {
        this.wrappedExecutor = /* @__PURE__ */ (function(e3, t3, r3, n2) {
          return { async *execute(s2, o2, i2) {
            const { hookContext: a2, helpers: c2 } = q(s2, o2, t3, r3, n2, i2), l2 = n2.runPreExecutionHooks ? async (e4) => {
              await n2.runPreExecutionHooks(e4);
            } : void 0, u2 = await N(s2, o2, t3, a2, c2, n2, (e4, t4) => n2.createRejectedEvent(e4, t4), l2);
            if ("rejected" === u2.type) {
              yield u2.result;
              for (const e4 of L(n2, a2)) yield e4;
              return;
            }
            const d2 = A.performance.now(), p2 = n2.createResultCollector();
            let m2 = false;
            try {
              for await (const t4 of e3.execute(s2, o2, i2)) p2.onEvent(t4), yield t4;
            } catch (e4) {
              m2 = true;
              const t4 = D(A.performance.now() - d2), r4 = e4 instanceof Error ? e4.message : String(e4);
              await c2.fireFailureAsync(t4, r4, "error");
              for (const e5 of L(n2, a2)) yield e5;
              throw e4;
            }
            const h2 = D(A.performance.now() - d2);
            if (n2.runPostExecutionHooks) try {
              await n2.runPostExecutionHooks({ ctx: s2, args: o2, baseHookRequest: a2.baseHookRequest, hookExecutor: t3, toolInput: c2.getToolInput(), toolUseId: a2.toolUseId, extraHookFields: a2.extraHookFields, collector: p2, executionDurationMs: h2 });
            } catch (e4) {
              O.warn(s2, "postExecutionHooks error", { toolName: n2.toolName, error: e4 instanceof Error ? e4.message : String(e4) });
            }
            if (!m2) if (p2.isAborted()) await c2.fireFailureAsync(h2, "Command was aborted", "error", true);
            else if (n2.isStreamSuccess?.(p2) ?? true) await c2.fireSuccessAsync(h2, JSON.stringify(n2.createSuccessOutput(o2, p2)));
            else {
              const e4 = n2.getStreamErrorMessage?.(o2, p2) ?? `Command failed with exit code ${p2.getExitCode()}`;
              await c2.fireFailureAsync(h2, e4, "error");
            }
            for (const e4 of L(n2, a2)) yield e4;
          } };
        })(e2, t2, r2, Ke);
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    var Ye = r(19950), Qe = r(46842), Xe = r(75261);
    function Ze(e2, t2) {
      return { toolName: K, getToolCallId: F, createToolInput: (e3) => ({ file_path: e3.path, content: e3.fileText }), applyUpdatedInput: (e3, t3) => {
        "string" == typeof t3.file_path && (e3.path = t3.file_path);
      }, createRejectedResult: (e3, t3) => new Ye.v3({ result: { case: "error", value: new Ye.QM({ path: e3.path, error: t3 }) } }), isSuccess: (e3) => "success" === e3.result.case, getErrorMessage: (e3) => "error" === e3.result.case ? e3.result.value.error || "Write error" : "Unknown error", createSuccessOutput: (e3) => ({ file_path: e3.path, success: true }), runPreExecutionHooks: async (e3) => {
        const { args: r2, toolUseId: n2 } = e3;
        let s2, o2 = false;
        try {
          (await (0, w.stat)(r2.path)).size > 262144 ? o2 = true : s2 = await (0, Qe.yR)(r2.path);
        } catch (e4) {
        }
        t2.set(n2, { contentBeforeWrite: s2, fileTooLarge: o2 });
      }, runCleanup: (e3) => {
        t2.delete(e3);
      }, runPostExecutionHooks: async (r2) => {
        const { args: n2, result: s2, baseHookRequest: o2, toolUseId: i2 } = r2, a2 = t2.get(i2);
        if ("success" !== s2.result.case) return;
        const { contentBeforeWrite: c2, fileTooLarge: l2 } = a2 ?? { fileTooLarge: false };
        let u2;
        u2 = l2 || void 0 === c2 ? [{ old_string: "", new_string: n2.fileText }] : c2 === n2.fileText ? [] : (function(e3, t3) {
          const r3 = (0, Xe.YB)("", "", e3, t3, "", "", { context: 0 });
          return 0 === r3.hunks.length ? [] : r3.hunks.map((e4) => {
            const t4 = [], r4 = [];
            for (const n3 of e4.lines) n3.startsWith("-") ? t4.push(n3.slice(1)) : n3.startsWith("+") && r4.push(n3.slice(1));
            return { old_string: t4.join("\n"), new_string: r4.join("\n") };
          });
        })(c2, n2.fileText);
        const d2 = { ...o2, file_path: n2.path, edits: u2 }, p2 = await e2.executeHookForStep(v._E.afterFileEdit, d2);
        if (n2.returnFileContentAfterWrite && void 0 !== p2) {
          const e3 = s2.result.value.path;
          try {
            const t3 = await (0, Qe.yR)(e3), r3 = (0, Qe.lt)(t3), n3 = Buffer.byteLength(t3, "utf8");
            return new Ye.v3({ result: { case: "success", value: new Ye.j6({ ...s2.result.value, fileContentAfterWrite: t3, linesCreated: r3, fileSize: n3 }) } });
          } catch (e4) {
            return;
          }
        }
      } };
    }
    class et {
      constructor(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Map();
        this.wrappedExecutor = U(e2, t2, r2, Ze(t2, n2));
      }
      execute(e2, t2, r2) {
        return this.wrappedExecutor.execute(e2, t2, r2);
      }
    }
    class tt {
      constructor(e2, t2, r2, n2, s2, o2, i2) {
        this.innerAccessor = e2, this.hookExecutor = t2, this.baseHookRequestExtractor = r2, this.mcpLease = n2, this.hooksAdditionalContextPromise = s2, this.teamHooksReadyPromise = o2, this.hooksConfigLease = i2;
      }
      get(e2) {
        if (e2.symbol === n.bob.symbol) return new n.gl4(this.hookExecutor);
        const t2 = this.innerAccessor.get(e2);
        return e2.symbol === n.qkk.symbol ? new We(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.wve.symbol ? new Ve(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.Lnu.symbol ? new et(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.Yib.symbol ? new Je(t2, this.hookExecutor, this.baseHookRequestExtractor, this.mcpLease, this.hooksConfigLease) : e2.symbol === n._As.symbol || e2.symbol === n.Mfc.symbol ? new Ue(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.bL4.symbol ? new Ce(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.u8v.symbol ? new Ee(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.IGA.symbol ? new Se(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.RpG.symbol ? new ge(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.w4j.symbol ? new ve(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.rn8.symbol ? new Be(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.mlu.symbol ? new qe(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.OkD.symbol ? new ce(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.TQC.symbol ? new ue(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.iZk.symbol ? new me(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.pq5.symbol ? new je(t2, this.hookExecutor, this.baseHookRequestExtractor) : e2.symbol === n.MZM.symbol && (this.hooksAdditionalContextPromise || this.hooksConfigLease) ? new j(t2, this.hooksAdditionalContextPromise ?? Promise.resolve(void 0), this.teamHooksReadyPromise, this.hooksConfigLease) : t2;
      }
      *entries() {
        for (const [e2, t2] of this.innerAccessor.entries()) e2.symbol === n.qkk.symbol ? yield [e2, new We(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.wve.symbol ? yield [e2, new Ve(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.Lnu.symbol ? yield [e2, new et(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.Yib.symbol ? yield [e2, new Je(t2, this.hookExecutor, this.baseHookRequestExtractor, this.mcpLease, this.hooksConfigLease)] : e2.symbol === n._As.symbol || e2.symbol === n.Mfc.symbol ? yield [e2, new Ue(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.bL4.symbol ? yield [e2, new Ce(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.u8v.symbol ? yield [e2, new Ee(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.IGA.symbol ? yield [e2, new Se(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.RpG.symbol ? yield [e2, new ge(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.w4j.symbol ? yield [e2, new ve(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.rn8.symbol ? yield [e2, new Be(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.mlu.symbol ? yield [e2, new qe(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.OkD.symbol ? yield [e2, new ce(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.TQC.symbol ? yield [e2, new ue(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.iZk.symbol ? yield [e2, new me(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.pq5.symbol ? yield [e2, new je(t2, this.hookExecutor, this.baseHookRequestExtractor)] : e2.symbol === n.MZM.symbol && (this.hooksAdditionalContextPromise || this.hooksConfigLease) ? yield [e2, new j(t2, this.hooksAdditionalContextPromise ?? Promise.resolve(void 0), this.teamHooksReadyPromise, this.hooksConfigLease)] : yield [e2, t2];
        yield [n.bob, new n.gl4(this.hookExecutor)];
      }
    }
  }