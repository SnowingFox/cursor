// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 56126 range:8700956..8703631
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56126: (e, t, r) => {
    "use strict";
    function n(e2) {
      return e2.clone();
    }
    function s(e2) {
      return { ...e2, value: o(e2.value) };
    }
    function o(e2) {
      const t2 = e2.clone();
      return a(t2), t2;
    }
    function i(e2, t2) {
      let r2 = e2;
      for (; null !== r2; ) {
        const n2 = Object.getOwnPropertyDescriptor(r2, t2);
        if (void 0 !== n2) return void 0 !== n2.get ? n2.get.call(e2) : n2.value;
        r2 = Object.getPrototypeOf(r2);
      }
    }
    function a(e2) {
      !(function(e3) {
        const t2 = e3.getType().runtime.bin, r2 = t2.listUnknownFields(e3);
        if (0 === r2.length) return;
        const n2 = r2.map((e4) => ({ no: e4.no, wireType: e4.wireType, data: e4.data.slice() }));
        t2.discardUnknownFields(e3);
        for (const r3 of n2) t2.onUnknownField(e3, r3.no, r3.wireType, r3.data);
      })(e2);
      for (const t2 of e2.getType().fields.byMember()) {
        const r2 = i(e2, t2.localName);
        if ("oneof" !== t2.kind) if (t2.repeated && Array.isArray(r2)) for (const e3 of r2) c(e3);
        else if ("map" !== t2.kind || null === r2 || "object" != typeof r2) c(r2);
        else for (const e3 of Object.values(r2)) c(e3);
        else null !== r2 && "object" == typeof r2 && "value" in r2 && c(r2.value);
      }
    }
    function c(e2) {
      (function(e3) {
        return "object" == typeof e3 && null !== e3 && "function" == typeof e3.clone && "function" == typeof e3.getType;
      })(e2) && a(e2);
    }
    function l(e2) {
      return { ...e2, ...void 0 === e2.parent ? {} : { parent: { ...e2.parent } }, ...void 0 === e2.updatedAt ? {} : { updatedAt: e2.updatedAt.clone() }, ...void 0 === e2.workspace ? {} : { workspace: (t2 = e2.workspace, { ...t2, workspacePaths: [...t2.workspacePaths] }) }, queuedTurnIds: [...e2.queuedTurnIds] };
      var t2;
    }
    function u(e2) {
      switch (e2.event.case) {
        case "snapshot":
          return { event: { case: "snapshot", value: { sessions: e2.event.value.sessions.map(l) } } };
        case "added":
          return { event: { case: "added", value: { session: l(e2.event.value.session) } } };
        case "updated":
          return { event: { case: "updated", value: { session: l(e2.event.value.session) } } };
        case "deleted":
          return { event: { case: "deleted", value: { sessionId: e2.event.value.sessionId } } };
        default:
          return e2.event;
      }
    }
    function d(e2) {
      return { ...e2, metadata: void 0 === e2.metadata ? void 0 : { ...e2.metadata } };
    }
    r.d(t, { C8: () => d, J5: () => l, VB: () => s, ks: () => n, q4: () => u });
  }