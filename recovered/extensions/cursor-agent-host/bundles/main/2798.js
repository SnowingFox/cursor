// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 2798 range:122977..127501
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2798: (e, t, r) => {
    "use strict";
    r.d(t, { y: () => n });
    class n {
      constructor(e2, t2) {
        this.runId = e2, this.entries = /* @__PURE__ */ new Map(), this.order = [], this.runEnded = false, this.generateDeliveryBatchId = t2?.generateDeliveryBatchId ?? (() => crypto.randomUUID()), this.now = t2?.now ?? (() => Date.now()), this.onStateChange = t2?.onStateChange;
      }
      admit(e2) {
        if ("" === e2.injectionId) return { kind: "rejected", reason: "empty_injection_id" };
        const t2 = this.entries.get(e2.injectionId);
        return void 0 !== t2 ? { kind: "duplicate", state: t2.state } : e2.expectedRunId !== this.runId ? { kind: "rejected", reason: "run_mismatch" } : this.runEnded ? "user" === e2.source ? (this.record(e2, { kind: "queued_for_next_turn" }), { kind: "queued_for_next_turn" }) : (this.record(e2, { kind: "rejected", reason: "run_ended" }), { kind: "rejected", reason: "run_ended" }) : (this.record(e2, { kind: "queued" }), { kind: "queued" });
      }
      cancel(e2) {
        const t2 = this.entries.get(e2);
        return void 0 !== t2 && "queued" === t2.state.kind && void 0 === t2.claimedBatchId && (this.transition(t2, { kind: "cancelled" }), true);
      }
      claimBatch(e2) {
        for (const t3 of this.entries.values()) if (t3.source === e2 && void 0 !== t3.claimedBatchId) return;
        const t2 = this.order.map((e3) => this.entries.get(e3)).filter((t3) => void 0 !== t3 && t3.source === e2 && "queued" === t3.state.kind && void 0 === t3.claimedBatchId);
        if (0 === t2.length) return;
        const r2 = this.generateDeliveryBatchId();
        for (const e3 of t2) e3.claimedBatchId = r2;
        return { deliveryBatchId: r2, source: e2, injections: t2.map((e3) => ({ injectionId: e3.injectionId, payload: e3.payload })) };
      }
      ackDelivered(e2, t2) {
        const r2 = this.now();
        for (const n2 of this.entries.values()) n2.claimedBatchId === e2 && (n2.claimedBatchId = void 0, this.transition(n2, { kind: "delivered", step: t2, deliveryBatchId: e2, deliveredAtMs: r2 }));
      }
      ackDeliveredInjection(e2, t2) {
        const r2 = this.entries.get(e2);
        if (void 0 === r2 || void 0 === r2.claimedBatchId) return;
        const n2 = r2.claimedBatchId;
        r2.claimedBatchId = void 0, this.transition(r2, { kind: "delivered", step: t2, deliveryBatchId: n2, deliveredAtMs: this.now() });
      }
      failDeliveredInjection(e2) {
        const t2 = this.entries.get(e2);
        return void 0 !== t2 && "delivered" === t2.state.kind && ("user" === t2.source ? this.transition(t2, { kind: "queued_for_next_turn" }) : this.transition(t2, { kind: "rejected", reason: "run_ended" }), true);
      }
      retagQueuedUserInjectionsToNextTurn() {
        const e2 = [];
        for (const t2 of this.order) {
          const r2 = this.entries.get(t2);
          void 0 !== r2 && "user" === r2.source && "queued" === r2.state.kind && void 0 === r2.claimedBatchId && (this.transition(r2, { kind: "queued_for_next_turn" }), e2.push(r2.injectionId));
        }
        return e2;
      }
      endRun(e2) {
        const t2 = e2?.retagClaimed ?? true;
        this.runEnded = true;
        for (const e3 of this.entries.values()) "queued" === e3.state.kind && (t2 || void 0 === e3.claimedBatchId) && (e3.claimedBatchId = void 0, "user" === e3.source ? this.transition(e3, { kind: "queued_for_next_turn" }) : this.transition(e3, { kind: "rejected", reason: "run_ended" }));
      }
      getState(e2) {
        return this.entries.get(e2)?.state;
      }
      oldestPendingAdmittedAtMs(e2) {
        for (const t2 of this.order) {
          const r2 = this.entries.get(t2);
          if (void 0 !== r2 && r2.source === e2 && "queued" === r2.state.kind && void 0 === r2.claimedBatchId && void 0 !== r2.admittedAtMs) return r2.admittedAtMs;
        }
      }
      pendingCount(e2) {
        let t2 = 0;
        for (const r2 of this.entries.values()) "queued" !== r2.state.kind || void 0 !== r2.claimedBatchId || void 0 !== e2 && r2.source !== e2 || t2++;
        return t2;
      }
      record(e2, t2) {
        const r2 = { injectionId: e2.injectionId, source: e2.source, payload: e2.payload, state: t2, ..."queued" === t2.kind ? { admittedAtMs: this.now() } : {} };
        this.entries.set(e2.injectionId, r2), this.order.push(e2.injectionId), this.onStateChange?.(e2.injectionId, t2);
      }
      transition(e2, t2) {
        e2.state = t2, this.onStateChange?.(e2.injectionId, t2);
      }
    }
  }