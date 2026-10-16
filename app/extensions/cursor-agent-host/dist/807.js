"use strict";
exports.id = 807, exports.ids = [807], exports.modules = { 29534: (e, s, t) => {
  t.d(s, { Qf: () => o, ic: () => i });
  const i = "sandbox_read_control_portal";
  function o(e2) {
    let s2 = false, t2 = 0;
    const o2 = () => {
      const i2 = ++t2;
      Promise.resolve(e2.checkFeatureGate()).then((e3) => {
        i2 === t2 && (s2 = e3);
      }, () => {
        i2 === t2 && (s2 = false);
      });
    };
    o2();
    const n = e2.onDidChangeGates((e3) => {
      var s3;
      (void 0 === (s3 = e3.changedGates) || s3.includes(i)) && o2();
    });
    return { getEnabled: () => s2, dispose: () => n.dispose() };
  }
}, 36807: (e, s, t) => {
  t.d(s, { createIdeSessionResourceOverlay: () => y, createIdeTeamSettingsService: () => w, getOrCreateIdeIgnoreService: () => S });
  var i = t(70857), o = t(91105), n = t(32180), r = t(91398), a = t(29534), c = t(25925);
  function l(e2) {
    if ("insecure_none" === e2.type) return e2;
    const { networkAccess: s2, skipStatsigDefaults: t2, ...i2 } = e2;
    return { ...i2, networkPolicy: s2 ? (0, c.T6)() : (0, c.Po)(), skipStatsigDefaults: t2 };
  }
  function d(e2) {
    return { ...e2, userConfiguredPolicy: l(e2.userConfiguredPolicy) };
  }
  class u {
    constructor(e2, s2) {
      this.fetchPermissions = e2, this.onDidChangePermissions = s2, this.fetchStarted = false, this.cachedPermissions = new Promise((e3) => {
        this.resolveFirstPermissions = e3;
      }), this.permissionsSubscription = this.onDidChangePermissions((e3) => {
        this.applyPermissions(d(e3));
      });
    }
    async getPermissions() {
      return void 0 !== this.latestPermissions ? this.latestPermissions : (this.ensureFetchStarted(), this.cachedPermissions);
    }
    getPermissionsSnapshot() {
      return this.latestPermissions;
    }
    applyPermissions(e2) {
      this.latestPermissions = e2, this.cachedPermissions = Promise.resolve(e2);
      const s2 = this.resolveFirstPermissions;
      this.resolveFirstPermissions = void 0, s2?.(e2);
    }
    ensureFetchStarted() {
      this.fetchStarted || void 0 !== this.latestPermissions || (this.fetchStarted = true, this.fetchPermissions().then((e2) => {
        void 0 === this.latestPermissions && this.applyPermissions(d(e2));
      }, () => {
      }));
    }
    async updatePermissions(e2) {
    }
    dispose() {
      this.permissionsSubscription.dispose();
    }
  }
  var h = t(46862);
  const p = "mcp_access_network_allowlist", m = "mcp_settings_overhaul", g = "mcp_user_extension_stdio_unsandboxed_win32", v = "admin_command_denylist_enforcement_killswitch";
  class P {
    constructor(e2) {
      this.approvalHandler = e2;
    }
    async requestApproval(e2) {
      if (e2.toolCallId) {
        const s2 = { toolCallId: e2.toolCallId, operation: { type: e2.type, details: e2.details } };
        return this.approvalHandler(s2);
      }
      return { approved: true };
    }
    async requestReadApproval(e2) {
      if (e2.toolCallId) {
        const s2 = { toolCallId: e2.toolCallId, operation: { type: e2.type, details: e2.details } };
        return this.approvalHandler(s2);
      }
      return { approved: true };
    }
  }
  function w() {
    const e2 = { getTeamAdminSettings: async () => {
      const e3 = await r.cursor.getTeamAdminSettings();
      return e3 ? n.V5U.fromJson(e3, { ignoreUnknownFields: true }) : void 0;
    }, getTeamRepos: async () => {
      try {
        const e3 = await r.cursor.getTeamRepos();
        return e3 ? new n.k1F(e3) : void 0;
      } catch {
        return;
      }
    } }, s2 = { getDefaultNetworkAllowlist: async () => {
      try {
        const e3 = await r.cursor.getDynamicConfigValue("sandbox_default_network_allowlist");
        return e3?.allowlist ?? [];
      } catch {
        return [];
      }
    } };
    return new o.waD(e2, s2, { isMcpAccessNetworkAllowlistEnabled: () => r.cursor.checkFeatureGate(p), isMcpSettingsOverhaulEnabled: (e3) => r.cursor.checkFeatureGate(m, e3), isWin32UserExtensionStdioUnsandboxEnabled: (e3) => r.cursor.checkFeatureGate(g, e3), isAdminCommandDenylistEnforcementKilled: () => r.cursor.checkFeatureGate(v), isReadControlEnabled: () => r.cursor.checkFeatureGate(a.ic) });
  }
  function S(e2) {
    const s2 = [...e2.workspacePaths].sort().join("\0");
    let t2 = e2.ignoreServiceCache.get(s2);
    return void 0 === t2 && (t2 = new o.E1e(e2.gitExecutor, e2.teamSettingsService, [...e2.workspacePaths]), e2.ignoreServiceCache.set(s2, t2)), t2;
  }
  function y(e2) {
    const s2 = S(e2), t2 = new P(async (s3) => await e2.session.approvalHandler(s3)), n2 = new u(async () => await e2.session.getPermissions(), e2.session.onDidChangePermissions), r2 = (0, h.En)(e2.workspacePaths, i.homedir());
    return { ignoreService: s2, pendingDecisionStore: t2, permissionsService: new o.khl(s2, t2, n2, e2.teamSettingsService, r2, true, void 0 === e2.mcpAllowlistLog ? void 0 : { mcpAllowlistLog: e2.mcpAllowlistLog }), executionWorkspacePaths: r2, getSandboxEnabled: () => {
      const e3 = n2.getPermissionsSnapshot()?.userConfiguredPolicy;
      return void 0 !== e3 && "insecure_none" !== e3.type;
    }, dispose: () => {
      n2.dispose();
    } };
  }
} };
