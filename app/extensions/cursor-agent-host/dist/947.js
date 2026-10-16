"use strict";
exports.id = 947, exports.ids = [947], exports.modules = { 69947: (t, e, s) => {
  s.d(e, { createIdeHostedMcpRoutingProvider: () => l });
  var i = s(75088), o = s(42862), n = s(38669);
  const r = 3e5, a = "ide-routing-gate";
  function d(t2) {
    return { getTools: (e2) => t2.getTools(e2), getToolSet: (e2) => t2.getToolSet(e2), getClients: (e2) => t2.getClients(e2), getClient: (e2, s2) => t2.getClient(e2, s2), getInstructions: (e2) => t2.getInstructions(e2), getToolsForServers: (e2, s2) => t2.getToolsForServers(e2, s2), onDidChange: (e2) => t2.onDidChange(e2), rebuild: () => Promise.resolve() };
  }
  class g {
    constructor(t2, e2) {
      this.lease = t2, this.routingUnavailableReason = e2, this.routingAvailable = false;
    }
    get snapshotProvider() {
      return this.lease.snapshotProvider;
    }
    isRoutingActive() {
      return false;
    }
    sessionRoutingEnabled() {
      return false;
    }
    settled() {
      return Promise.resolve();
    }
    disableRouting() {
    }
    noteGrantChanged() {
    }
    wrapNetwork(t2) {
      return t2;
    }
    getTools(t2) {
      return this.lease.getTools(t2);
    }
    getToolSet(t2) {
      return this.lease.getToolSet(t2);
    }
    getClients(t2) {
      return this.lease.getClients(t2);
    }
    getClient(t2, e2) {
      return this.lease.getClient(t2, e2);
    }
    getInstructions(t2) {
      return this.lease.getInstructions(t2);
    }
    getToolsForServers(t2, e2) {
      return this.lease.getToolsForServers(t2, e2);
    }
    onDidChange(t2) {
      return this.lease.onDidChange(t2);
    }
    dispose() {
    }
  }
  class h {
    constructor(t2, e2) {
      if (this.lease = t2, this.options = e2, this.gateReadGeneration = 0, this.gateReads = Promise.resolve(), this.deferredNoticeLogged = false, this.disposed = false, "next_launch" === e2.flipOnPolicy && e2.initialGateValue) throw new Error("hosted-mcp-routing-adapter: next_launch is for a window whose gate read off at activation");
      this.state = new i.LD(false), this.state.noteSession(a, { hostedMcpRoutingEnabled: e2.initialGateValue }), this.transport = (0, i.l_)(), this.provider = (0, i.Tr)({ lease: d(t2), filter: new i.SJ(() => this.state.isRoutingEnabled()), state: this.state, transport: this.transport.transport, caller: (0, i.xX)(o.G1.IDE), deviceTag: e2.deviceTag, metrics: e2.metrics, listingTtlMs: e2.listingTtlMs ?? r, listingWaitCapMs: 1500, serveLastListingOnTtl: true, serveLastListingOnChange: true, log: e2.log }), this.gateSubscription = e2.gates.onDidChangeGates((t3) => {
        var e3;
        (void 0 === (e3 = t3.changedGates) || e3.includes(n.Y)) && this.rereadGate();
      }), this.stateSubscription = this.state.onDidChange(() => this.reportRoutingActive()), this.rereadGate(), this.reportRoutingActive();
      const s2 = t2.snapshotProvider;
      this.snapshots = void 0 === s2 ? void 0 : this.routedSnapshotView(s2);
    }
    reportRoutingActive() {
      this.settled().then(() => {
        if (this.disposed) return;
        const t2 = this.isRoutingActive();
        t2 !== this.reportedRoutingActive && (this.reportedRoutingActive = t2, this.options.onDidChangeRoutingActive?.(t2));
      });
    }
    routedSnapshotView(t2) {
      const e2 = async (t3, e3) => {
        await this.gateReads, await this.provider.settled();
        const s2 = this.provider.routing;
        return void 0 !== s2 && this.provider.isRoutingActive() ? s2.mergeSnapshots(t3, e3) : e3;
      };
      return { getAllSnapshots: async (s2) => e2(s2, await t2.getAllSnapshots(s2)), getSnapshot: async (s2, i2) => (await e2(s2, await t2.getAllSnapshots(s2))).find((t3) => t3.serverIdentifier === i2), onDidChange: (e3) => t2.onDidChange(e3) };
    }
    get snapshotProvider() {
      return this.snapshots;
    }
    get routingAvailable() {
      return void 0 === this.disabledReason;
    }
    get routingUnavailableReason() {
      return this.disabledReason;
    }
    isRoutingActive() {
      return this.provider.isRoutingActive();
    }
    sessionRoutingEnabled() {
      return this.state.isRoutingEnabled();
    }
    async settled() {
      await this.gateReads, await this.provider.settled();
    }
    noteGrantChanged(t2, e2) {
      this.disposed || this.provider.noteGrantChanged(t2, e2);
    }
    disableRouting(t2) {
      if (void 0 !== this.disabledReason || this.disposed) return;
      this.disabledReason = t2, this.gateSubscription.dispose(), this.gateReadGeneration += 1;
      const e2 = this.state.isRoutingEnabled();
      this.state.noteSession(a, { hostedMcpRoutingEnabled: false }), this.options.log(`Hosted MCP routing disabled for this window (${t2})${e2 ? "; server-placed rows return to the lease" : ""}`);
    }
    wrapNetwork(t2) {
      return { ...t2, onConnectTransportReady: (e2) => {
        t2.onConnectTransportReady?.(e2), this.transport.resolve(e2);
      } };
    }
    rereadGate() {
      const t2 = ++this.gateReadGeneration, e2 = (0, n.r)(this.options.gates).then((e3) => {
        if (this.disposed || t2 !== this.gateReadGeneration) return;
        if (e3 && "next_launch" === this.options.flipOnPolicy) return void (this.deferredNoticeLogged || (this.deferredNoticeLogged = true, this.options.log("Hosted MCP routing ON (gate changed): this window activated with the gate off, so server-placed rows keep dialing locally and routing starts at the next launch")));
        this.deferredNoticeLogged = false;
        const s2 = this.state.isRoutingEnabled();
        this.state.noteSession(a, { hostedMcpRoutingEnabled: e3 }), s2 !== e3 && this.options.log(`Hosted MCP routing ${e3 ? "ON" : "OFF"} (gate changed)`);
      });
      this.gateReads = this.gateReads.then(() => e2, () => e2);
    }
    async getTools(t2) {
      return await this.gateReads, this.provider.getTools(t2);
    }
    async getToolSet(t2) {
      return await this.gateReads, this.provider.getToolSet(t2);
    }
    async getClients(t2) {
      return await this.gateReads, this.provider.getClients(t2);
    }
    async getClient(t2, e2) {
      return await this.gateReads, this.provider.getClient(t2, e2);
    }
    async getInstructions(t2) {
      return await this.gateReads, this.provider.getInstructions(t2);
    }
    async getToolsForServers(t2, e2) {
      return await this.gateReads, this.provider.getToolsForServers(t2, e2);
    }
    onDidChange(t2) {
      return this.provider.onDidChange(t2);
    }
    dispose() {
      this.disposed || (this.disposed = true, this.gateSubscription.dispose(), this.stateSubscription.dispose(), this.provider.dispose(), this.transport.dispose());
    }
  }
  function l(t2) {
    return void 0 !== t2.remoteName ? (t2.log(`Hosted MCP routing unavailable on remote window (${JSON.stringify(t2.remoteName)}): the remote in-process MCP lease is not placement-filtered, so every row is served locally`), t2.onDidChangeRoutingActive?.(false), new g(t2.lease, "remote_window")) : (t2.log(`Hosted MCP routing adapter ready (gate ${t2.initialGateValue ? "ON" : "OFF"} at activation, flip-on ${t2.flipOnPolicy ?? "live"}, listing TTL ${String(t2.listingTtlMs ?? r)} ms)`), new h(t2.lease, t2));
  }
} };
