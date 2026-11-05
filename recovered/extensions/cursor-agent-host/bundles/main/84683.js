// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 84683 range:12006408..12011140
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84683: (e, t, r) => {
    "use strict";
    r.d(t, { MG: () => c, Ri: () => d, _G: () => l });
    var n = r(51455), s = r(21180), o = r(93181), i = r(90393), a = r(75149);
    const c = "agentStoreConflict";
    function l(e2) {
      const t2 = (0, a.dN)(e2, { maxChars: a.HA });
      return void 0 === t2 || 0 === t2.length ? [] : [new s.C({ hookEventName: c, content: t2 })];
    }
    async function u(e2) {
      try {
        const t2 = await n.stat(e2);
        return { mtimeMs: t2.mtimeMs, size: t2.size };
      } catch {
        return;
      }
    }
    class d {
      constructor(e2) {
        this.lastStat = /* @__PURE__ */ new Map(), this.pending = /* @__PURE__ */ new Map(), this.leased = /* @__PURE__ */ new Map(), this.peekChain = Promise.resolve(), this.sources = e2.sources, this.quotaNoticesEnabled = "function" == typeof e2.quotaNoticesEnabled ? e2.quotaNoticesEnabled : () => true === e2.quotaNoticesEnabled, this.sessionStartedAtMs = e2.sessionStartedAtMs, this.statJournal = e2.statJournal ?? u, this.claimState = e2.claimState, this.announced = e2.claimState?.announced ?? e2.announcedEventIds ?? /* @__PURE__ */ new Set(), this.leasedIds = e2.claimState?.leasedIds ?? /* @__PURE__ */ new Set(), this.cursors = /* @__PURE__ */ new Map(), this.warn = e2.warn ?? (() => {
        });
      }
      async peek() {
        const e2 = this.claimState ?? { chain: this.peekChain }, t2 = e2.chain.then(() => this.peekUnlocked()), r2 = t2.then(() => {
        }, () => {
        });
        return e2.chain = r2, void 0 === this.claimState && (this.peekChain = r2), t2;
      }
      async peekUnlocked() {
        const e2 = await this.collectRefs(), t2 = new Set(e2.map((e3) => e3.journalPath));
        for (const t3 of e2) {
          const e3 = await this.drainOne(t3.journalPath);
          for (const r3 of e3) this.leased.has(r3.event_id) || this.leasedIds.has(r3.event_id) || this.pending.set(r3.event_id, { event: r3, journalPath: t3.journalPath });
        }
        for (const e3 of [...this.pending.keys()]) (this.announced.has(e3) || this.leasedIds.has(e3)) && this.pending.delete(e3);
        const r2 = this.quotaNoticesEnabled(), n2 = [];
        for (const [e3, s3] of [...this.pending]) t2.has(s3.journalPath) && (r2 || "quota_exceeded" !== s3.event.kind) && (this.pending.delete(e3), this.leased.set(e3, s3), this.leasedIds.add(e3), n2.push(s3));
        if (0 === n2.length) return { carriers: [], eventIds: [] };
        const s2 = n2.map((e3) => e3.event);
        return { carriers: l(s2), eventIds: s2.map((e3) => e3.event_id) };
      }
      ack(e2) {
        const t2 = e2.filter((e3) => this.leased.has(e3));
        (0, i._3)(this.announced, t2);
        for (const e3 of t2) this.pending.delete(e3), this.leased.delete(e3), this.leasedIds.delete(e3);
      }
      release(e2) {
        for (const t2 of e2) {
          const e3 = this.leased.get(t2);
          void 0 !== e3 && (this.leasedIds.delete(t2), this.announced.has(t2) || this.pending.set(t2, e3), this.leased.delete(t2));
        }
      }
      releaseAllLeased() {
        this.release([...this.leased.keys()]);
      }
      ackAllLeased() {
        this.ack([...this.leased.keys()]);
      }
      async drain() {
        const e2 = await this.peek();
        return this.ack(e2.eventIds), e2.carriers;
      }
      async collectRefs() {
        const e2 = /* @__PURE__ */ new Set(), t2 = [];
        for (const r2 of this.sources) {
          let n2;
          try {
            n2 = await r2.listJournalRefs();
          } catch (e3) {
            this.warn("conflict notice source failed", e3);
            continue;
          }
          for (const r3 of n2) 0 === r3.journalPath.length || e2.has(r3.journalPath) || (e2.add(r3.journalPath), t2.push(r3));
        }
        return t2;
      }
      async drainOne(e2) {
        const t2 = this.cursors.get(e2), r2 = await this.statJournal(e2);
        if (void 0 === r2) return [];
        const n2 = this.lastStat.get(e2);
        if (void 0 !== t2 && void 0 !== n2 && n2.mtimeMs === r2.mtimeMs && n2.size === r2.size) return [];
        let s2;
        try {
          s2 = await (0, o.Ob)({ journalPath: e2, cursor: t2, sessionStartedAtMs: this.sessionStartedAtMs, applyResolvedFilter: true });
        } catch (e3) {
          return this.warn("conflict journal read failed", e3), [];
        }
        const { deliverableEvents: i2, nextCursor: a2, stoppedAtForeignLease: c2 } = (0, o.$U)({ events: s2.events, fullNextCursor: s2.nextCursor, previousCursor: t2, announced: this.announced, leasedIds: this.leasedIds, isOwnLease: (e3) => this.leased.has(e3) });
        return this.cursors.set(e2, a2), c2 || this.lastStat.set(e2, r2), i2;
      }
    }
  }