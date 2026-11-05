// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80962 range:11681263..11682218
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80962: (e, t, r) => {
    "use strict";
    function n(e2) {
      return void 0 !== e2.parent || (e2.pendingTurns > 0 || (e2.events.getLastEventId() > BigInt(1) || e2.store.getConversationState().turns.length > 0));
    }
    function s(e2) {
      const t2 = /* @__PURE__ */ new Set([...e2.beforeList.keys(), ...e2.afterList.keys()]);
      for (const r2 of t2) {
        const t3 = e2.beforeList.get(r2), n2 = e2.afterList.get(r2);
        t3 !== n2 && (void 0 === n2 ? e2.catalogModelIds.delete(r2) : e2.catalogModelIds.set(r2, n2));
      }
    }
    r.d(t, { KH: () => i, j7: () => n, oF: () => a, sZ: () => s, zZ: () => c });
    const o = 50, i = 200;
    function a(e2) {
      return void 0 === e2 || e2 <= 0 ? o : Math.min(e2, i);
    }
    function c(e2, t2) {
      const r2 = e2.updatedAt?.toDate().getTime(), n2 = t2.updatedAt?.toDate().getTime();
      return void 0 === r2 ? void 0 === n2 ? 0 : 1 : void 0 === n2 ? -1 : n2 - r2;
    }
  }