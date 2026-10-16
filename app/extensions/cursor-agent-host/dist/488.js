"use strict";
exports.id = 488, exports.ids = [488], exports.modules = { 98488: (e, t, s) => {
  s.d(t, { createIdeAgentStoreActivate: () => g });
  var i = s(94289), o = s(70857), n = s(91398), r = s(9639), c = s(35068), a = s(47462), l = s(13920), d = s(77273), h = s(7334);
  class f {
    constructor() {
      this.conflictNoticeSessions = /* @__PURE__ */ new Map(), this.conflictNoticeKeyOwners = /* @__PURE__ */ new Map(), this.conflictNoticeSessionStarts = /* @__PURE__ */ new Map(), this.sharedConflictClaimState = (0, c.createConflictNoticeClaimState)();
    }
    wrapSessionResources(e2) {
      const t2 = () => true, s2 = e2.sessionId, i2 = /* @__PURE__ */ new Set(), o2 = e2.workspacePaths.length > 0 ? [...e2.workspacePaths] : [e2.projectDir], c2 = () => {
        const e3 = n.workspace.workspaceFolders?.map((e4) => e4.uri.fsPath) ?? [], t3 = /* @__PURE__ */ new Set(), s3 = [];
        for (const i3 of [...o2, ...e3]) 0 === i3.length || t3.has(i3) || (t3.add(i3), s3.push(i3));
        return s3.length > 0 ? s3 : o2;
      };
      this.getOrCreateConflictNoticeSession({ sessionKey: s2, isEnabled: t2, initialConversationId: s2, getBasePaths: c2 }), this.acquireConflictNoticeKey(s2), i2.add(s2);
      const f2 = (e3) => {
        if ("object" == typeof e3 && null !== e3 && "get" in e3 && "function" == typeof e3.get) return (0, d.L)(e3, e3.get(l.zN)?.conversationId)?.trim();
      }, g2 = (e3) => {
        const t3 = f2(e3);
        return void 0 !== t3 && t3.length > 0 ? t3 : s2;
      }, S = true === e2.isIdeLocalAgentPath, C = new a.OJ(e2.accessor, (e3) => {
        const o3 = g2(e3);
        return i2.has(o3) || (i2.add(o3), this.acquireConflictNoticeKey(o3)), this.getOrCreateConflictNoticeSession({ sessionKey: o3, isEnabled: t2, initialConversationId: f2(e3) ?? s2, getBasePaths: c2 }).drain;
      }, (0, h.te)(t2, c2), { skipPathWriteDrain: () => {
        return (e3 = { isIdeLocalAgentPath: S, noticesEnabled: true, hostRegistered: void 0 !== this.conflictNoticeSessions.get(s2)?.host }).isIdeLocalAgentPath && e3.noticesEnabled && e3.hostRegistered;
        var e3;
      }, forceWrittenPathBeforeDrain: (0, h.H_)(t2, c2), resolveWriteBarrierTimeoutMs: (0, h.mt)(), onWriteBarrier: (0, h.kE)(), onWakeWrittenPath: (e3, i3) => {
        try {
          const o3 = g2(i3);
          this.getOrCreateConflictNoticeSession({ sessionKey: o3, isEnabled: t2, initialConversationId: f2(i3) ?? s2, getBasePaths: c2 }).host.noteDeferredWrittenPaths([e3]);
        } catch {
        }
      } }), v = { execute: (e3, i3, o3) => {
        const n2 = ("conversationId" in i3 && "string" == typeof i3.conversationId && i3.conversationId.trim().length > 0 ? i3.conversationId.trim() : void 0) ?? s2, { host: r2 } = this.getOrCreateConflictNoticeSession({ sessionKey: n2, isEnabled: t2, initialConversationId: n2 === s2 ? s2 : n2, getBasePaths: c2 });
        return r2.execute(e3, i3, o3);
      } };
      return { accessor: new r.dwX(C, [(0, r.VNS)(r.YhQ, v)]), acquiredConflictNoticeKeys: i2, dispose: () => {
        this.clearConflictDrain(s2);
        for (const e3 of i2) this.releaseConflictNoticeKey(e3);
        i2.clear();
      } };
    }
    noteConflictNoticeSessionStart(e2) {
      this.conflictNoticeSessionStarts.has(e2) || this.conflictNoticeSessionStarts.set(e2, Date.now());
    }
    acquireConflictNoticeKey(e2) {
      const t2 = e2.trim();
      0 !== t2.length && (this.noteConflictNoticeSessionStart(t2), this.conflictNoticeKeyOwners.set(t2, (this.conflictNoticeKeyOwners.get(t2) ?? 0) + 1));
    }
    releaseConflictNoticeKey(e2) {
      const t2 = e2.trim();
      if (0 === t2.length) return;
      const s2 = this.conflictNoticeKeyOwners.get(t2) ?? 0;
      s2 <= 1 ? this.conflictNoticeKeyOwners.delete(t2) : this.conflictNoticeKeyOwners.set(t2, s2 - 1);
    }
    releaseConflictNoticeSessionLeases(e2) {
      const t2 = this.conflictNoticeSessions.get(e2);
      void 0 !== t2 && (t2.drain.releaseAllLeased(), t2.host.releaseAllLeased());
    }
    clearConflictDrain(e2) {
      const t2 = e2.trim();
      0 !== t2.length && (this.releaseConflictNoticeSessionLeases(t2), this.conflictNoticeSessions.delete(t2), this.conflictNoticeKeyOwners.delete(t2), this.conflictNoticeSessionStarts.delete(t2));
    }
    getOrCreateConflictNoticeSession(e2) {
      const t2 = this.conflictNoticeSessions.get(e2.sessionKey);
      if (void 0 !== t2) return void 0 !== e2.initialConversationId && e2.initialConversationId.length > 0 && t2.bindConversationId(e2.initialConversationId), t2;
      let s2 = this.conflictNoticeSessionStarts.get(e2.sessionKey);
      void 0 === s2 && (s2 = Date.now(), this.conflictNoticeSessionStarts.set(e2.sessionKey, s2));
      const i2 = { current: e2.initialConversationId }, o2 = { drain: new c.AgentStoreConflictDrain({ sources: [(0, h.uR)(e2.isEnabled, () => i2.current)], sessionStartedAtMs: s2, claimState: this.sharedConflictClaimState }), host: new a.ng({ driver: (0, h.V0)(e2.isEnabled, e2.getBasePaths), sessionStartedAtMs: s2, claimState: this.sharedConflictClaimState, resolveForceGraceTimeoutMs: (0, h.mt)() }), bindConversationId: (e3) => {
        const t3 = e3.trim();
        t3.length > 0 && (i2.current = t3);
      } };
      return this.conflictNoticeSessions.set(e2.sessionKey, o2), o2;
    }
  }
  async function g(e2) {
    const t2 = [], s2 = /* @__PURE__ */ new Map(), r2 = { name: "Cursor Agent Host", appendLine: c2 = e2.appendLine, append: (e3) => {
      c2(e3);
    }, replace: (e3) => {
      c2(e3);
    }, clear: () => {
    }, show: () => {
    }, hide: () => {
    }, dispose: () => {
    } };
    var c2;
    await (0, h.iH)(e2.context, r2, t2, void 0 !== e2.whenProviderRegistered ? { whenProviderRegistered: e2.whenProviderRegistered } : void 0), t2.push(h.dw.onDidChangeTargetDirs(() => {
      n.commands.executeCommand(i._d).then(void 0, () => {
      });
    }));
    const a2 = new f();
    let l2;
    return { snapshot: { harnessActivated: true, conflictNoticesWired: true, shellExtraEnvProviderWired: true }, getAgentStoreSkillsContext: () => ({ agentStoreSkillsDirs: h.dw.get(), userHomeDirectory: o.homedir() }), onDidChangeSkillRoots: (e3) => h.dw.onDidChange(e3), createSessionOverrides: ({ sessionId: e3, workspacePaths: t3 }) => (s2.set(e3, t3), { overrides: { shellExtraEnvProvider: (0, h.dk)({ sessionId: e3 }) } }), wrapResources({ args: t3, accessor: i2 }) {
      const o2 = a2.wrapSessionResources({ sessionId: t3.sessionId, accessor: i2, workspacePaths: s2.get(t3.sessionId) ?? [], projectDir: e2.projectDir });
      return { accessor: o2.accessor, dispose: () => {
        o2.dispose(), s2.delete(t3.sessionId);
      } };
    }, dispose: () => (void 0 === l2 && (l2 = (async () => {
      const e3 = t2.splice(0).reverse();
      for (const t3 of e3) {
        const e4 = t3();
        if (e4 instanceof Promise) try {
          await e4;
        } catch {
        }
      }
    })()), l2) };
  }
} };
