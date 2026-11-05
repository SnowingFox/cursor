// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 93181 range:11271026..11290614
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93181: (e, t, r) => {
    "use strict";
    r.d(t, { $U: () => b, Bw: () => T, EG: () => B, Gm: () => J, KD: () => U, Mi: () => w, O9: () => x, Ob: () => P, Tj: () => $, Y: () => I, Zz: () => L, aJ: () => F, hJ: () => c, kL: () => v, pc: () => E, tN: () => C, y5: () => S });
    var n = r(77598), s = r(73024), o = r(51455), i = r(76760), a = r(83737);
    const c = 4194304, l = 384;
    function u(e2) {
      return (t2, r2) => {
        e2(t2, (function(e3) {
          if (!(e3 instanceof Error)) return "string" == typeof e3 ? "<redacted>" : e3;
          const t3 = e3.code, r3 = new Error(void 0 !== t3 ? `${e3.name}: ${t3}` : e3.name);
          return r3.name = e3.name, void 0 !== t3 && (r3.code = t3), r3;
        })(r2));
      };
    }
    const d = s.constants.O_NOFOLLOW;
    function p() {
      return Date.now();
    }
    function m(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    function h(e2) {
      return "string" == typeof e2 ? e2 : void 0;
    }
    function f(e2) {
      return "number" == typeof e2 && Number.isFinite(e2) ? e2 : void 0;
    }
    function g(e2) {
      return "boolean" == typeof e2 ? e2 : void 0;
    }
    const y = /* @__PURE__ */ new Set(["write_conflict", "create_conflict", "truncate_conflict_failed", "conflict_fallback_failed", "quota_exceeded", "gap"]);
    function w(e2) {
      if (!m(e2)) return;
      const t2 = h(e2.event_id), r2 = h(e2.journal_epoch), n2 = h(e2.kind), s2 = f(e2.seq), o2 = f(e2.ts_ms), i2 = f(e2.v);
      if (void 0 === t2 || void 0 === r2 || void 0 === n2 || void 0 === s2 || void 0 === o2 || void 0 === i2 || !y.has(n2)) return;
      const a2 = n2, c2 = "local_sync" === h(e2.source) ? "local_sync" : void 0, l2 = g(e2.remote_only);
      return { v: i2, event_id: t2, journal_epoch: r2, seq: s2, ts_ms: o2, kind: a2, store_id: h(e2.store_id), original_rel_path: h(e2.original_rel_path), conflict_rel_path: h(e2.conflict_rel_path), original_abs_path: h(e2.original_abs_path), conflict_abs_path: h(e2.conflict_abs_path), preserved_bytes: f(e2.preserved_bytes), scope_kind: h(e2.scope_kind), limit_bytes: f(e2.limit_bytes), usage_bytes: f(e2.usage_bytes), ...void 0 !== c2 ? { source: c2 } : {}, ...true === l2 ? { remote_only: true } : {} };
    }
    function v(e2) {
      const t2 = [];
      for (const r2 of e2.split("\n")) {
        const e3 = r2.trim();
        if (0 === e3.length) continue;
        let n2;
        try {
          n2 = JSON.parse(e3);
        } catch {
          continue;
        }
        const s2 = w(n2);
        void 0 !== s2 && t2.push(s2);
      }
      return t2;
    }
    function _(e2) {
      return { journalEpoch: e2.journal_epoch, seq: e2.seq, lastEventId: e2.event_id };
    }
    function b(e2) {
      const { events: t2, fullNextCursor: r2, previousCursor: n2, announced: s2, leasedIds: o2, isOwnLease: i2, continuePastForeignLeases: a2 = false } = e2;
      if (0 === t2.length) return { deliverableEvents: [], nextCursor: r2, stoppedAtForeignLease: false };
      const c2 = [];
      let l2, u2 = false;
      for (const e3 of t2) if (s2.has(e3.event_id)) l2 = e3;
      else {
        if (o2.has(e3.event_id) && !i2(e3.event_id)) {
          if (a2) continue;
          u2 = true;
          break;
        }
        l2 = e3, c2.push(e3);
      }
      if (!u2) return { deliverableEvents: c2, nextCursor: r2, stoppedAtForeignLease: false };
      return { deliverableEvents: c2, nextCursor: void 0 !== l2 ? _(l2) : n2 ?? { journalEpoch: "", seq: 0, lastEventId: "" }, stoppedAtForeignLease: true };
    }
    function S(e2, t2) {
      const r2 = t2.journalEpoch.length > 0;
      let n2 = -1;
      if (r2) for (let r3 = e2.length - 1; r3 >= 0; r3--) {
        const s3 = e2[r3];
        if (void 0 !== s3 && (s3.event_id === t2.lastEventId || s3.journal_epoch === t2.journalEpoch && s3.seq <= t2.seq)) {
          n2 = r3;
          break;
        }
      }
      const s2 = r2 ? e2.slice(n2 + 1) : [...e2], o2 = s2.some((e3) => "gap" === e3.kind) || r2 && -1 === n2 && e2.length > 0, i2 = /* @__PURE__ */ new Set(), a2 = [];
      for (const e3 of s2) "gap" !== e3.kind && (i2.has(e3.event_id) || (i2.add(e3.event_id), a2.push(e3)));
      const c2 = s2[s2.length - 1];
      return { events: a2, nextCursor: void 0 !== c2 ? _(c2) : t2, gap: o2 };
    }
    function k(e2, t2, r2) {
      return e2 ? t2 > 0 || 0 === r2.preserved_bytes : true === r2.remote_only;
    }
    async function x(e2) {
      const t2 = e2.conflict_abs_path;
      if (void 0 === t2 || 0 === t2.length) return true;
      try {
        const r2 = await o.lstat(t2);
        return k(r2.isFile(), r2.size, e2);
      } catch (t3) {
        return !G(t3) || true === e2.remote_only;
      }
    }
    function E(e2) {
      const t2 = e2.conflict_abs_path;
      if (void 0 === t2 || 0 === t2.length) return true;
      try {
        const r2 = s.lstatSync(t2);
        return k(r2.isFile(), r2.size, e2);
      } catch (t3) {
        return !G(t3) || true === e2.remote_only;
      }
    }
    async function I(e2) {
      return x({ conflict_abs_path: e2 });
    }
    function T(e2) {
      return E({ conflict_abs_path: e2 });
    }
    function C(e2, t2) {
      return e2.filter((e3) => e3.ts_ms >= t2);
    }
    async function P(e2) {
      const t2 = e2.cursor ?? { journalEpoch: "", seq: 0, lastEventId: "" };
      let r2;
      try {
        r2 = await (async function(e3) {
          return N(e3);
        })(e2.journalPath);
      } catch (e3) {
        if ("object" == typeof e3 && null !== e3 && "code" in e3 && "ENOENT" === e3.code) return { events: [], nextCursor: t2, gap: false };
        throw e3;
      }
      let n2 = S(v(r2), t2);
      if (void 0 !== e2.sessionStartedAtMs && (n2 = { ...n2, events: C(n2.events, e2.sessionStartedAtMs) }), true === e2.applyResolvedFilter) {
        const e3 = [];
        for (const t3 of n2.events) await x(t3) && e3.push(t3);
        n2 = { ...n2, events: e3 };
      }
      return n2;
    }
    function A(e2) {
      const t2 = { v: e2.v, event_id: e2.event_id, journal_epoch: e2.journal_epoch, seq: e2.seq, ts_ms: e2.ts_ms, kind: e2.kind };
      return void 0 !== e2.store_id && (t2.store_id = e2.store_id), void 0 !== e2.original_rel_path && (t2.original_rel_path = e2.original_rel_path), void 0 !== e2.conflict_rel_path && (t2.conflict_rel_path = e2.conflict_rel_path), void 0 !== e2.original_abs_path && (t2.original_abs_path = e2.original_abs_path), void 0 !== e2.conflict_abs_path && (t2.conflict_abs_path = e2.conflict_abs_path), void 0 !== e2.scope_kind && (t2.scope_kind = e2.scope_kind), void 0 !== e2.limit_bytes && (t2.limit_bytes = e2.limit_bytes), void 0 !== e2.usage_bytes && (t2.usage_bytes = e2.usage_bytes), void 0 !== e2.preserved_bytes && (t2.preserved_bytes = e2.preserved_bytes), void 0 !== e2.source && (t2.source = e2.source), true === e2.remote_only && (t2.remote_only = true), `${JSON.stringify(t2)}
`;
    }
    function R(e2) {
      if (void 0 !== e2.conflictRelPath) return `${e2.storeId}\0${e2.conflictRelPath}`;
      if ("truncate_conflict_failed" === e2.kind) return `${e2.storeId}\0\0truncate:${e2.originalRelPath}`;
      if ("conflict_fallback_failed" === e2.kind) return `${e2.storeId}\0\0fallback:${e2.originalRelPath}`;
      if ("quota_exceeded" === e2.kind) {
        const t2 = e2.scopeKind ?? "store";
        return `${e2.storeId}\0\0quota:${t2}`;
      }
    }
    function M(e2) {
      if (void 0 !== e2.store_id) {
        if (void 0 !== e2.conflict_rel_path) return `${e2.store_id}\0${e2.conflict_rel_path}`;
        if ("quota_exceeded" === e2.kind) {
          const t2 = e2.scope_kind ?? "store";
          return `${e2.store_id}\0\0quota:${t2}`;
        }
        if (void 0 !== e2.original_rel_path) return "truncate_conflict_failed" === e2.kind ? `${e2.store_id}\0\0truncate:${e2.original_rel_path}` : "conflict_fallback_failed" === e2.kind ? `${e2.store_id}\0\0fallback:${e2.original_rel_path}` : void 0;
      }
    }
    function J(e2) {
      return [e2.storeId, e2.kind, e2.originalRelPath, e2.conflictRelPath ?? ""].join("\0");
    }
    const O = /* @__PURE__ */ new Set(["write_conflict", "create_conflict", "truncate_conflict_failed", "conflict_fallback_failed", "quota_exceeded"]);
    function B(e2) {
      if (!m(e2)) return;
      const t2 = h(e2.kind), r2 = h(e2.storeId), n2 = h(e2.originalRelPath), s2 = h(e2.originalAbsPath);
      if (void 0 === t2 || void 0 === r2 || void 0 === n2 || void 0 === s2 || !O.has(t2)) return;
      const o2 = h(e2.source), i2 = g(e2.remoteOnly);
      return { kind: t2, storeId: r2, originalRelPath: n2, conflictRelPath: h(e2.conflictRelPath), originalAbsPath: s2, conflictAbsPath: h(e2.conflictAbsPath), preservedBytes: f(e2.preservedBytes), scopeKind: h(e2.scopeKind), limitBytes: f(e2.limitBytes), usageBytes: f(e2.usageBytes), ..."local_sync" === o2 ? { source: "local_sync" } : {}, ...true === i2 ? { remoteOnly: true } : {} };
    }
    function D(e2) {
      const t2 = { kind: e2.kind, storeId: e2.storeId, originalRelPath: e2.originalRelPath, originalAbsPath: e2.originalAbsPath };
      return void 0 !== e2.conflictRelPath && (t2.conflictRelPath = e2.conflictRelPath), void 0 !== e2.conflictAbsPath && (t2.conflictAbsPath = e2.conflictAbsPath), void 0 !== e2.preservedBytes && (t2.preservedBytes = e2.preservedBytes), void 0 !== e2.scopeKind && (t2.scopeKind = e2.scopeKind), void 0 !== e2.limitBytes && (t2.limitBytes = e2.limitBytes), void 0 !== e2.usageBytes && (t2.usageBytes = e2.usageBytes), void 0 !== e2.source && (t2.source = e2.source), true === e2.remoteOnly && (t2.remoteOnly = true), `${JSON.stringify(t2)}
`;
    }
    function q(e2, t2) {
      const { baseFlags: r2, mode: n2, nofollowFlag: o2 } = t2;
      if ("number" == typeof o2) return s.openSync(e2, r2 | o2, n2);
      let i2;
      try {
        i2 = s.lstatSync(e2);
      } catch (e3) {
        if (!G(e3)) throw e3;
      }
      if (true === i2?.isSymbolicLink()) {
        const t3 = new Error(`refusing to open symlinked journal path: ${e2}`);
        throw t3.code = "ELOOP", t3;
      }
      return s.openSync(e2, r2, n2);
    }
    function N(e2) {
      const t2 = q(e2, { baseFlags: s.constants.O_RDONLY, mode: l, nofollowFlag: d });
      try {
        return s.readFileSync(t2, "utf8");
      } finally {
        s.closeSync(t2);
      }
    }
    class F {
      constructor(e2, t2) {
        this.nextSeq = 1, this.appendFailures = 0, this.rotations = 0, this.emittedConflicts = /* @__PURE__ */ new Set(), this.path = e2, this.epoch = (0, n.randomUUID)(), this.warn = u(t2?.warn ?? ((e3, t3) => {
        })), this.hydrateDedupFromDisk();
      }
      hydrateDedupFromDisk() {
        const e2 = this.readDedupKeysFromDisk();
        void 0 !== e2 && this.replaceDedupKeys(e2);
      }
      readDedupKeysFromDisk() {
        let e2;
        try {
          e2 = N(this.path);
        } catch (e3) {
          return G(e3) ? [] : void this.warn("conflict journal dedup hydrate failed", e3);
        }
        const t2 = [];
        for (const r2 of v(e2)) {
          const e3 = M(r2);
          void 0 !== e3 && t2.push(e3);
        }
        return t2;
      }
      replaceDedupKeys(e2) {
        this.emittedConflicts.clear();
        for (const t2 of e2) this.emittedConflicts.size >= 65536 && this.emittedConflicts.clear(), this.emittedConflicts.add(t2);
      }
      refreshDedupFromDisk() {
        const e2 = this.readDedupKeysFromDisk();
        return void 0 !== e2 && (this.replaceDedupKeys(e2), true);
      }
      appendFailureCount() {
        return this.appendFailures;
      }
      rotationCount() {
        return this.rotations;
      }
      wouldDedup(e2) {
        const t2 = R(e2);
        return void 0 !== t2 && this.emittedConflicts.has(t2);
      }
      emit(e2) {
        const t2 = R(e2);
        if (void 0 !== t2 && this.emittedConflicts.has(t2)) return true;
        try {
          return this.appendEmit(e2, t2), true;
        } catch (e3) {
          return this.appendFailures += 1, this.warn(`conflict journal append failed; sync round still succeeded (failures=${this.appendFailures})`, e3), false;
        }
      }
      appendEmit(e2, t2) {
        if (void 0 !== t2 && this.emittedConflicts.has(t2)) return;
        const r2 = i.dirname(this.path);
        r2.length > 0 && (0, a.Ew)(r2), this.maybeRotateLocked();
        const s2 = this.nextSeq, o2 = { v: 1, event_id: (0, n.randomUUID)(), journal_epoch: this.epoch, seq: s2, ts_ms: p(), kind: e2.kind, store_id: e2.storeId, original_rel_path: e2.originalRelPath, conflict_rel_path: e2.conflictRelPath, original_abs_path: e2.originalAbsPath, conflict_abs_path: e2.conflictAbsPath, preserved_bytes: e2.preservedBytes, scope_kind: e2.scopeKind, limit_bytes: e2.limitBytes, usage_bytes: e2.usageBytes, ...void 0 !== e2.source ? { source: e2.source } : {}, ...true === e2.remoteOnly ? { remote_only: true } : {} };
        this.writeJsonlLine(o2), this.nextSeq = s2 + 1, void 0 !== t2 && (this.emittedConflicts.size >= 65536 && this.emittedConflicts.clear(), this.emittedConflicts.add(t2));
      }
      writeJsonlLine(e2) {
        const t2 = A(e2), r2 = q(this.path, { baseFlags: s.constants.O_WRONLY | s.constants.O_CREAT | s.constants.O_APPEND, mode: l, nofollowFlag: d });
        try {
          try {
            s.fchmodSync(r2, l);
          } catch {
          }
          s.writeSync(r2, t2);
          try {
            s.fsyncSync(r2);
          } catch {
          }
        } finally {
          s.closeSync(r2);
        }
      }
      maybeRotateLocked() {
        let e2;
        try {
          e2 = s.statSync(this.path).size;
        } catch (e3) {
          if ("object" == typeof e3 && null !== e3 && "code" in e3 && "ENOENT" === e3.code) return;
          return void this.warn("conflict journal metadata failed; skipping rotate", e3);
        }
        if (!(e2 < c)) try {
          this.forceGapRewriteLocked();
        } catch (e3) {
          this.warn("conflict journal rotate rewrite failed; appending onto oversized journal", e3);
        }
      }
      forceGapRewriteLocked() {
        const e2 = this.nextSeq, t2 = A({ v: 1, event_id: (0, n.randomUUID)(), journal_epoch: this.epoch, seq: e2, ts_ms: p(), kind: "gap" }), r2 = `${this.path}.rotate-tmp`;
        try {
          s.unlinkSync(r2);
        } catch (e3) {
          if (!G(e3)) throw e3;
        }
        const o2 = q(r2, { baseFlags: s.constants.O_WRONLY | s.constants.O_CREAT | s.constants.O_EXCL, mode: l, nofollowFlag: d });
        try {
          try {
            s.fchmodSync(o2, l);
          } catch {
          }
          s.writeSync(o2, t2);
          try {
            s.fsyncSync(o2);
          } catch {
          }
        } finally {
          s.closeSync(o2);
        }
        s.renameSync(r2, this.path), this.nextSeq = e2 + 1, this.emittedConflicts.clear(), this.rotations += 1;
      }
    }
    function U(e2) {
      return i.join(i.dirname(i.resolve(e2)), a.kR, a.Ai);
    }
    function L(e2) {
      return i.join(i.dirname(i.resolve(e2)), a.kR, a.Wi);
    }
    class $ {
      constructor(e2, t2) {
        this.pending = [], this.keys = /* @__PURE__ */ new Set(), this.persistFailures = 0, this.dirty = false, this.loadFailed = false, this.path = e2, this.warn = u(t2?.warn ?? ((e3, t3) => {
        }));
        const r2 = this.tryReadDisk();
        void 0 !== r2 ? (this.pending = r2.pending, this.keys = r2.keys) : this.loadFailed = true;
      }
      size() {
        return this.pending.length;
      }
      isEmpty() {
        return 0 === this.pending.length;
      }
      list() {
        return [...this.pending];
      }
      persistFailureCount() {
        return this.persistFailures;
      }
      reload() {
        const e2 = this.tryReadDisk();
        if (void 0 === e2) return;
        if (this.loadFailed = false, !this.dirty) return this.pending = e2.pending, void (this.keys = e2.keys);
        const t2 = /* @__PURE__ */ new Map();
        for (const r3 of e2.pending) t2.set(J(r3), r3);
        for (const e3 of this.pending) t2.set(J(e3), e3);
        const r2 = [...t2.values()];
        this.pending = r2, this.keys = new Set(t2.keys()), this.dirty = !this.persistPending(r2);
      }
      enqueue(e2) {
        const t2 = J(e2);
        this.keys.has(t2) ? (this.dirty || this.loadFailed) && (this.dirty = !this.persistPending(this.pending)) : (this.keys.add(t2), this.pending.push(e2), this.dirty = !this.persistPending(this.pending));
      }
      replaceAll(e2) {
        const t2 = [], r2 = /* @__PURE__ */ new Set();
        for (const n3 of e2) {
          const e3 = J(n3);
          r2.has(e3) || (r2.add(e3), t2.push(n3));
        }
        const n2 = this.loadFailed;
        this.persistPending(t2) && (n2 || (this.pending = t2, this.keys = r2), this.dirty = false);
      }
      tryReadDisk() {
        let e2;
        try {
          e2 = N(this.path);
        } catch (e3) {
          return G(e3) ? { pending: [], keys: /* @__PURE__ */ new Set() } : void this.warn("conflict pending journal load failed", e3);
        }
        const t2 = [], r2 = /* @__PURE__ */ new Set();
        for (const n2 of e2.split("\n")) {
          const e3 = n2.trim();
          if (0 === e3.length) continue;
          let s2;
          try {
            s2 = JSON.parse(e3);
          } catch {
            continue;
          }
          const o2 = B(s2);
          if (void 0 === o2) continue;
          const i2 = J(o2);
          r2.has(i2) || (r2.add(i2), t2.push(o2));
        }
        return { pending: t2, keys: r2 };
      }
      persistPending(e2) {
        if (this.loadFailed) {
          const t2 = this.tryReadDisk();
          if (void 0 === t2) return this.persistFailures += 1, this.warn(`conflict pending journal persist skipped; sidecar still unreadable (failures=${this.persistFailures})`, void 0), false;
          this.loadFailed = false;
          const r2 = /* @__PURE__ */ new Map();
          for (const e3 of t2.pending) r2.set(J(e3), e3);
          for (const t3 of e2) r2.set(J(t3), t3);
          const n2 = [...r2.values()];
          return this.pending = n2, this.keys = new Set(r2.keys()), this.persistPending(n2);
        }
        try {
          if (0 === e2.length) return this.removeFile(), true;
          const t2 = i.dirname(this.path);
          t2.length > 0 && (0, a.Ew)(t2);
          const r2 = e2.map(D).join("");
          return this.atomicRewrite(r2), true;
        } catch (e3) {
          return this.persistFailures += 1, this.warn(`conflict pending journal persist failed (failures=${this.persistFailures})`, e3), false;
        }
      }
      atomicRewrite(e2) {
        const t2 = `${this.path}.pending-tmp`;
        try {
          s.unlinkSync(t2);
        } catch (e3) {
          if (!G(e3)) throw e3;
        }
        const r2 = q(t2, { baseFlags: s.constants.O_WRONLY | s.constants.O_CREAT | s.constants.O_EXCL, mode: j, nofollowFlag: d });
        try {
          try {
            s.fchmodSync(r2, j);
          } catch {
          }
          s.writeSync(r2, e2);
          try {
            s.fsyncSync(r2);
          } catch {
          }
        } finally {
          s.closeSync(r2);
        }
        s.renameSync(t2, this.path);
      }
      removeFile() {
        try {
          s.unlinkSync(this.path);
        } catch (e2) {
          if (!G(e2)) throw e2;
        }
      }
    }
    const j = 384;
    function G(e2) {
      return "object" == typeof e2 && null !== e2 && "code" in e2 && "ENOENT" === e2.code;
    }
  }