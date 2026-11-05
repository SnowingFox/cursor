// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/88.js sha256:ada2371f3d8ec477769ade1f1156252eb3b227bb6ec8bbbeda01dedacce5366c
// module: (footer) range:101593..110494
// basis: webpack-container confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
};
  function dt() {
    return { cursorRulesService: new Ae(), subagentsService: new s.KpW(), agentSkillsService: ut, getAgentSkills: async () => [], reloadSkillRoots() {
    }, dispose() {
    } };
  }
  function ht(e2) {
    const t2 = ct(e2.sources);
    if ((function(e3) {
      return ot.every((t3) => !e3[t3]);
    })(t2)) return dt();
    const r2 = t2.project ? [...e2.workspacePaths] : [], n2 = true === t2.user;
    if (0 === r2.length && !n2) return dt();
    Xe(e2.ripgrepPath);
    const i2 = (0, d.q6)(), o2 = e2.getThirdPartyExtensibilityEnabled ?? (() => true), a2 = e2.userHome ?? (0, it.homedir)(), c2 = true === e2.allowExternalSubagentSymlinks, l2 = [];
    for (const t3 of r2) l2.push(new s.KOV(i2, e2.gitExecutor, t3, true, o2, e2.fileWatcher, e2.ignoreService));
    let u2;
    (r2.length > 0 || n2) && (u2 = new s.EVC(i2, r2, n2 ? a2 : `${r2[0]}/.agent-host-exec-no-user-home`, e2.gitExecutor, true, e2.fileWatcher, o2, e2.initialBuiltinSkillsSyncPromise ?? Promise.resolve(), e2.surface ?? "headless", void 0, () => e2.getAgentStoreSkillsContext?.().agentStoreSkillsDirs ?? [], e2.agentSkillsCatalogCache), l2.push(u2));
    const h2 = 0 === l2.length ? new Ae() : 1 === l2.length ? l2[0] : new s.Px0(l2, e2.getAgentStoreSkillsContext ?? (() => s.$3f)), p2 = [];
    if (t2.project) for (const e3 of r2) p2.push(new s.VzO(e3, o2, "workspace", c2));
    n2 && p2.push(new s.VzO(a2, o2, "user", c2));
    const f2 = 0 === p2.length ? new s.KpW() : 1 === p2.length ? p2[0] : new s.o_K(p2), g2 = u2 ?? ut;
    return { cursorRulesService: h2, subagentsService: f2, agentSkillsService: g2, getAgentSkills: (e3) => g2.getAllAgentSkills(e3), reloadSkillRoots() {
      u2?.reloadSkillRoots();
    }, dispose() {
      h2.dispose();
    } };
  }
  function pt(e2) {
    const t2 = /* @__PURE__ */ new Set();
    for (const r2 of e2) r2.length > 0 && t2.add(r2);
    return [...t2];
  }
  class ft {
    constructor(e2) {
      this.processRoutingEnabled = e2, this.sessions = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Set();
    }
    isRoutingEnabled() {
      if (this.processRoutingEnabled) return true;
      for (const e2 of this.sessions.values()) if (e2.enabled) return true;
      return false;
    }
    localGrantIdentifiers() {
      const e2 = /* @__PURE__ */ new Set();
      for (const t2 of this.sessions.values()) for (const r2 of t2.grantIdentifiers) e2.add(r2);
      return e2;
    }
    noteSession(e2, t2) {
      const r2 = { enabled: true === t2?.hostedMcpRoutingEnabled, grantIdentifiers: pt((t2?.hostedMcpLocalGrantIdentifiers ?? []).map((e3) => e3.trim())) }, s2 = this.fingerprint();
      this.sessions.set(e2, r2), this.fireIfChanged(s2);
    }
    forgetSession(e2) {
      if (!this.sessions.has(e2)) return;
      const t2 = this.fingerprint();
      this.sessions.delete(e2), this.fireIfChanged(t2);
    }
    onDidChange(e2) {
      return this.listeners.add(e2), { dispose: () => {
        this.listeners.delete(e2);
      } };
    }
    fingerprint() {
      return JSON.stringify([this.isRoutingEnabled(), [...this.localGrantIdentifiers()].sort()]);
    }
    fireIfChanged(e2) {
      if (this.fingerprint() !== e2) for (const e3 of this.listeners) e3();
    }
  }
  class gt {
    constructor(e2) {
      this.routingEnabled = e2, this.includeDefinition = (e3) => !this.routingEnabled() || (void 0 === this.routingFilter ? "stdio" === e3.kind : this.routingFilter(e3));
    }
    setRoutingFilter(e2) {
      this.routingFilter = e2;
    }
    clearRoutingFilter() {
      this.routingFilter = void 0;
    }
    hasRoutingFilter() {
      return void 0 !== this.routingFilter;
    }
  }
  class mt {
    constructor(e2) {
      this.listeners = /* @__PURE__ */ new Set(), this.subscriptions = [], this.flips = Promise.resolve(), this.disposed = false, this.lease = e2.lease, this.filter = e2.filter, this.state = e2.state, this.log = e2.log ?? (() => {
      });
      const t2 = e2.lease, r2 = e2.filter, s2 = e2.transport;
      this.canRoute = void 0 !== s2, this.createRouting = () => {
        let n2;
        return n2 = new ve({ transport: s2, caller: e2.caller, deviceTag: e2.deviceTag, metrics: e2.metrics, listingTtlMs: e2.listingTtlMs, listingWaitCapMs: e2.listingWaitCapMs, serveLastListingOnTtl: e2.serveLastListingOnTtl, serveLastListingOnChange: e2.serveLastListingOnChange, createWrappedLease: async (e3, s3) => {
          if (this.routingProvider !== n2 || this.disposed) throw new Error("hosted-mcp-routing: provider replaced before its placement listing finished");
          return r2.setRoutingFilter(s3.includeDefinition), await t2.rebuild(), /* @__PURE__ */ (function(e4) {
            return { getTools: (t3) => e4.getTools(t3), getToolSet: (t3) => e4.getToolSet(t3), getClients: (t3) => e4.getClients(t3), getClient: (t3, r3) => e4.getClient(t3, r3), getInstructions: (t3) => e4.getInstructions(t3), getToolsForServers: (t3, r3) => e4.getToolsForServers(t3, r3), onDidChange: (t3) => e4.onDidChange(t3), dispose: () => {
            } };
          })(t2);
        }, ...void 0 === e2.grantMigration ? {} : { grantMigration: { migrationEnabled: true === e2.grantMigration.migrationEnabled, store: e2.grantMigration.store, listLocalGrants: e2.grantMigration.listLocalGrants } } }), n2;
      }, this.active = this.canRoute && this.state.isRoutingEnabled(), this.active && this.startRouting(), this.subscriptions.push(this.state.onDidChange(() => {
        this.onGateChange();
      }), this.lease.onDidChange((e3) => {
        this.active || this.fire(e3);
      }));
    }
    get routing() {
      return this.routingProvider;
    }
    isRoutingActive() {
      return this.active;
    }
    settled() {
      return this.flips;
    }
    noteGrantChanged(e2, t2) {
      this.active && !this.disposed && this.routingProvider?.noteGrantChanged(e2, t2);
    }
    target() {
      return this.active && void 0 !== this.routingProvider ? this.routingProvider : this.lease;
    }
    startRouting() {
      const e2 = this.createRouting();
      this.routingProvider = e2, this.routingSubscription = e2.onDidChange((t2) => {
        this.active && this.routingProvider === e2 && this.fire(t2);
      });
    }
    stopRouting() {
      const e2 = this.routingProvider;
      return this.routingProvider = void 0, this.routingSubscription?.dispose(), this.routingSubscription = void 0, this.filter.clearRoutingFilter(), e2;
    }
    onGateChange() {
      const e2 = this.canRoute && this.state.isRoutingEnabled();
      if (e2 === this.active || this.disposed) return;
      let t2;
      e2 ? this.startRouting() : t2 = this.stopRouting(), this.active = e2;
      const r2 = this.routingProvider, s2 = async () => {
        try {
          await this.lease.rebuild();
        } catch (e3) {
          this.log(`hosted-mcp-routing: lease rebuild after gate change failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
        t2?.dispose(), e2 && void 0 !== r2 && !this.disposed && r2.refreshPlacements((0, d.q6)()).catch((e3) => {
          this.log(`hosted-mcp-routing: placement listing after gate change failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }), this.fire(void 0);
      };
      this.flips = this.flips.then(s2, s2);
    }
    async getTools(e2) {
      return await this.flips, this.target().getTools(e2);
    }
    async getToolSet(e2) {
      return await this.flips, this.target().getToolSet(e2);
    }
    async getClients(e2) {
      return await this.flips, this.target().getClients(e2);
    }
    async getClient(e2, t2) {
      return await this.flips, this.target().getClient(e2, t2);
    }
    async getInstructions(e2) {
      return await this.flips, this.target().getInstructions(e2);
    }
    async getToolsForServers(e2, t2) {
      return await this.flips, this.target().getToolsForServers(e2, t2);
    }
    onDidChange(e2) {
      return this.listeners.add(e2), { dispose: () => {
        this.listeners.delete(e2);
      } };
    }
    dispose() {
      if (!this.disposed) {
        this.disposed = true;
        for (const e2 of this.subscriptions.splice(0)) e2.dispose();
        this.listeners.clear(), this.stopRouting()?.dispose();
      }
    }
    fire(e2) {
      for (const t2 of this.listeners) t2(e2);
    }
  }
  function vt(e2) {
    return new mt(e2);
  }
  function wt() {
    let e2, t2;
    const r2 = new Promise((r3, s2) => {
      e2 = r3, t2 = s2;
    });
    return r2.catch(() => {
    }), { transport: { unary: async (e3, t3, s2, n2, i2, o2, a2) => (await r2).unary(e3, t3, s2, n2, i2, o2, a2), stream: async (e3, t3, s2, n2, i2, o2, a2) => (await r2).stream(e3, t3, s2, n2, i2, o2, a2) }, resolve: (r3) => {
      e2?.(r3), e2 = void 0, t2 = void 0;
    }, dispose: () => {
      t2?.(new Error("Connect transport was disposed before it was ready")), e2 = void 0, t2 = void 0;
    } };
  }
} };
