// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 67640 range:10507370..10517779
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
67640: (e, t, r) => {
    "use strict";
    r.d(t, { Pz: () => p, Qf: () => f, zj: () => g });
    var n = r(37949), s = r(98875), o = r(33002), i = r(47825), a = r(22544);
    const c = 6e4, l = { component: "storage" }, u = (0, n.h)("agent-host:storage"), d = { hydrate: "agentHostStorage.hydrateSession", checkpoint: "agentHostStorage.writeCheckpoint", list: "agentHostStorage.listSessions" };
    class p {
      constructor(e2) {
        this.args = e2, this.lastWarnAtMs = /* @__PURE__ */ new Map(), this.storageObserver = (e3) => {
          try {
            this.observe(e3);
          } catch (e4) {
            this.reportSinkFailure(e4);
          }
        }, this.sessionEnabled = void 0 !== e2.ctx || void 0 !== e2.metrics || void 0 !== e2.onStorageFault;
      }
      reportBlobReads(e2, t2, r2, n2) {
        const o2 = n2.hits + n2.misses + n2.errors;
        this.distribution("blob_read_count", n2.hits, { source: r2, result: "hit" }), this.distribution("blob_read_count", n2.misses, { source: r2, result: "miss" }), this.distribution("blob_read_count", n2.errors, { source: r2, result: "error" }), this.observeSink(() => {
          const t3 = (0, s.fU)(e2);
          void 0 !== t3 && m(t3, { "agent_host.storage.blob_read.source": r2, "agent_host.storage.blob_read.count": o2, "agent_host.storage.blob_read.hit_count": n2.hits, "agent_host.storage.blob_read.miss_count": n2.misses, "agent_host.storage.blob_read.error_count": n2.errors });
        }), this.observeSink(() => {
          u.info(e2, "Turn terminal blob reads", { ...l, sessionId: t2, source: r2, count: o2, hits: n2.hits, misses: n2.misses, errors: n2.errors });
        }), "host_sqlite" === r2 && n2.misses > 0 && this.runtimeFault("host_blob_missing");
      }
      beginBlobReadSummary(e2, t2, r2) {
        if (void 0 === r2) return { ctx: e2, finish: () => {
        } };
        const n2 = (0, i.I)(e2, r2);
        return { ctx: n2.ctx, finish: () => this.reportBlobReads(n2.ctx, t2, n2.source, n2.counts) };
      }
      runtimeFault(e2) {
        this.distribution(e2, 1, { store: "session" }), this.fault({ kind: e2, store: "session" });
      }
      rejectHostOwnedLegacyBlobRead() {
        throw this.runtimeFault("host_owned_legacy_blob_read"), new Error("Host-owned session attempted a legacy blob read");
      }
      async timeAsync(e2, t2, r2, n2) {
        if (!this.sessionEnabled) return r2(t2);
        const s2 = performance.now();
        try {
          const o2 = await this.runWithParentedSpan(e2, t2, r2, n2);
          return this.distribution(`${e2}_ms`, performance.now() - s2, { outcome: "ok" }), o2;
        } catch (t3) {
          throw this.distribution(`${e2}_ms`, performance.now() - s2, { outcome: "error" }), t3;
        }
      }
      time(e2, t2, r2, n2) {
        if (!this.sessionEnabled) return r2();
        const s2 = Date.now(), o2 = performance.now();
        try {
          const i2 = r2(), a2 = performance.now() - o2;
          return this.distribution(`${e2}_ms`, a2, { outcome: "ok" }), this.recordCompletedSpan(e2, t2, s2, a2, () => ({ outcome: "ok", ...n2?.(i2) })), i2;
        } catch (r3) {
          const n3 = performance.now() - o2;
          throw this.distribution(`${e2}_ms`, n3, { outcome: "error" }), this.recordCompletedSpan(e2, t2, s2, n3, () => h(r3)), r3;
        }
      }
      async runWithParentedSpan(e2, t2, r2, n2) {
        if (void 0 === (0, s.fU)(t2) || true === t2.get(s.n3)) return r2(t2);
        let o2;
        try {
          return await (0, s.uj)(t2.withName(d[e2]), async (e3, t3) => {
            o2 = (async () => {
              try {
                return { kind: "ok", value: await r2(e3) };
              } catch (e4) {
                return { kind: "error", error: e4 };
              }
            })();
            const s2 = await o2;
            if ("ok" === s2.kind) return this.observeSink(() => {
              m(t3, { outcome: "ok", ...n2?.(s2.value) });
            }), s2.value;
            throw this.observeSink(() => {
              m(t3, h(s2.error));
            }), s2.error;
          });
        } catch (e3) {
          if (void 0 !== o2) {
            const t3 = await o2;
            if ("error" === t3.kind) throw e3 !== t3.error && this.reportSinkFailure(e3), t3.error;
            return this.reportSinkFailure(e3), t3.value;
          }
          return this.reportSinkFailure(e3), r2(t2);
        }
      }
      recordCompletedSpan(e2, t2, r2, n2, o2) {
        void 0 !== (0, s.fU)(t2) && true !== t2.get(s.n3) && this.observeSink(() => {
          (0, s.xd)(t2.withName(d[e2]), { startTime: r2, attributes: o2() }, r2 + n2);
        });
      }
      observeSink(e2) {
        try {
          e2();
        } catch (e3) {
          this.reportSinkFailure(e3);
        }
      }
      observe(e2) {
        const t2 = { ...l, store: e2.store, relPath: e2.relPath };
        switch (e2.kind) {
          case "opened":
            return this.distribution("open_ms", e2.durationMs, { store: e2.store, outcome: "ok", created: String(e2.created) }), this.debug("Agent host store opened", { ...t2, created: e2.created, durationMs: e2.durationMs }), void this.warnIfSlow(e2);
          case "open_failed":
            return this.distribution("open_ms", e2.durationMs, { store: e2.store, outcome: "error" }), e2.error instanceof a.C8 ? void this.debug("Agent host store is not committed yet", { ...t2, durationMs: e2.durationMs }) : void (this.warnIfContention(e2) || (this.fault({ ...e2, kind: "open_failed" }), this.debug("Agent host store open failed", { ...t2, code: e2.code, sqliteErrcode: e2.sqliteErrcode, durationMs: e2.durationMs })));
          case "transaction":
            return this.distribution("transaction_ms", e2.durationMs, { store: e2.store, outcome: e2.outcome }), void ("committed" === e2.outcome ? (this.debug("Agent host store transaction committed", { ...t2, durationMs: e2.durationMs }), this.warnIfSlow(e2)) : "rollback_failed" === e2.outcome ? (this.fault({ kind: "rollback_failed", store: e2.store, relPath: e2.relPath, durationMs: e2.durationMs, code: e2.code, sqliteErrcode: e2.sqliteErrcode }), this.error("Agent host store transaction failed and could not roll back; the file may be inconsistent", { ...t2, code: e2.code, sqliteErrcode: e2.sqliteErrcode, durationMs: e2.durationMs })) : this.warnIfContention(e2) || this.debug("Agent host store transaction rolled back", { ...t2, code: e2.code, sqliteErrcode: e2.sqliteErrcode, durationMs: e2.durationMs }));
          case "closed_store_use":
            return void this.warnRateLimited("closed", e2.relPath, "Agent host store used after close", t2);
        }
      }
      fault(e2) {
        try {
          this.args.onStorageFault?.(e2);
        } catch (e3) {
          this.reportSinkFailure(e3);
        }
      }
      distribution(e2, t2, r2) {
        try {
          this.args.metrics?.distribution({ stat: `agent_host.storage.${e2}`, value: t2, ...void 0 === r2 ? {} : { tags: r2 } });
        } catch (e3) {
          this.reportSinkFailure(e3);
        }
      }
      reportSinkFailure(e2) {
        const t2 = Date.now(), r2 = this.lastWarnAtMs.get("sink:");
        if (!(void 0 !== r2 && t2 - r2 < c)) {
          this.lastWarnAtMs.set("sink:", t2);
          try {
            console.warn("Agent host storage sink failed", e2 instanceof Error ? e2.name : typeof e2);
          } catch (e3) {
            e3 instanceof Error && e3.name;
          }
        }
      }
      ctx() {
        return this.args.ctx?.() ?? (0, o.q6)();
      }
      debug(e2, t2) {
        void 0 !== this.args.ctx && u.debug(this.args.ctx(), e2, t2);
      }
      error(e2, t2) {
        u.error(this.ctx(), e2, void 0, t2);
      }
      warnIfSlow(e2) {
        e2.durationMs > 1e3 && this.warnRateLimited("slow", e2.relPath, `Agent host store ${"opened" === e2.kind ? "open" : "transaction"} waited on a peer`, { ...l, store: e2.store, relPath: e2.relPath, durationMs: e2.durationMs });
      }
      warnIfContention(e2) {
        return (5 === (t2 = e2.sqliteErrcode) || 6 === t2) && (this.fault({ kind: "busy_exhausted", store: e2.store, relPath: e2.relPath, durationMs: e2.durationMs, code: e2.code, sqliteErrcode: e2.sqliteErrcode }), this.warnRateLimited("busy", e2.relPath, `Agent host store ${"open_failed" === e2.kind ? "open" : "transaction"} gave up waiting for a peer`, { ...l, store: e2.store, relPath: e2.relPath, sqliteErrcode: e2.sqliteErrcode, durationMs: e2.durationMs }), true);
        var t2;
      }
      warnRateLimited(e2, t2, r2, n2) {
        const s2 = `${e2}:${t2}`, o2 = Date.now(), i2 = this.lastWarnAtMs.get(s2);
        void 0 !== i2 && o2 - i2 < c || (this.lastWarnAtMs.set(s2, o2), u.warn(this.ctx(), r2, n2));
      }
    }
    function m(e2, t2) {
      for (const [r2, n2] of Object.entries(t2)) e2.setAttribute(r2, n2);
    }
    function h(e2) {
      const { code: t2, sqliteErrcode: r2 } = (0, a.CA)(e2);
      return { outcome: "error", "error.type": e2 instanceof Error ? e2.name : typeof e2, ...void 0 === t2 ? {} : { "error.code": t2 }, ...void 0 === r2 ? {} : { "error.sqlite_errcode": r2 } };
    }
    function f(e2) {
      const t2 = (t3) => t3.split(e2.storageDir).join("<storageDir>");
      let r2;
      const n2 = (e3) => {
        try {
          e3();
        } catch (e4) {
          const t3 = Date.now();
          if (void 0 !== r2 && t3 - r2 < c) return;
          r2 = t3;
          try {
            console.warn("Agent host storage logger failed", e4 instanceof Error ? e4.name : typeof e4);
          } catch (e5) {
            e5 instanceof Error && e5.name;
          }
        }
      };
      return { info: (r3) => {
        n2(() => u.info(e2.ctx(), t2(r3), l));
      }, warn: (r3) => {
        n2(() => u.warn(e2.ctx(), t2(r3), l));
      }, error: (r3, s2, o2) => {
        n2(() => u.error(e2.ctx(), t2(r3), g(s2, e2.storageDir), { ...Object.fromEntries(Object.entries(o2 ?? {}).map(([e3, r4]) => [e3, "string" == typeof r4 ? t2(r4) : r4])), ...l }));
      } };
    }
    function g(e2, t2) {
      if (void 0 === e2) return;
      const r2 = (e3) => e3.split(t2).join("<storageDir>");
      if (!(e2 instanceof Error)) return new Error(r2(String(e2)));
      const n2 = new Error(r2(e2.message));
      return n2.name = e2.name, n2.stack = void 0 === e2.stack ? void 0 : r2(e2.stack), n2;
    }
    p.none = new p({});
  }