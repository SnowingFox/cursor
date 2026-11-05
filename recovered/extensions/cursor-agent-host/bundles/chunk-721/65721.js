// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/721.js sha256:1383ea7d1062c82dfc8e309d4c0b5bfbc7206bfabbc76ae1ba60806d82d254ec
// module: 65721 range:4128..7620
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65721: (e, t, r) => {
  r.d(t, { createIdeMcpActivate: () => m });
  var s = r(37949), o = r(91105), a = r(91398);
  function c(e2) {
    if ("string" != typeof e2) return;
    const t2 = e2.trim();
    return t2.length > 0 ? t2 : void 0;
  }
  class i {
    constructor(e2) {
      this.elicitationHandler = e2;
    }
    createProvider(e2, t2, r2) {
      return new n(this.elicitationHandler, e2, t2, r2);
    }
  }
  class n {
    constructor(e2, t2, r2, s2) {
      this.elicitationHandler = e2, this.serverName = t2, this.toolName = r2, this.toolCallId = s2;
    }
    async elicit(e2, t2) {
      return await this.elicitationHandler(this.serverName, this.toolName, this.toolCallId, e2, t2?.signal);
    }
  }
  var l = r(28144);
  const u = "meta_mcp_tool", p = "mcp_meta_tool_slim_descriptors", h = "mcp_always_expose_auth_tool", d = "snapshots";
  async function m(e2) {
    const [t2, r2, n2, m2, g] = await Promise.all([a.cursor.checkFeatureGate(u), a.cursor.checkFeatureGate(p), a.cursor.checkFeatureGate(h), Promise.resolve(a.cursor.getDynamicConfigValue("mcp_auth_status_copy_config")).catch(() => {
    }), Promise.resolve(a.cursor.getPushRequestContextEnabled()).catch(() => false)]), b = a.window.createOutputChannel("Mcp FileSystem Writer", { log: true });
    try {
      return (function(e3, t3, r3) {
        const { mcpMetaToolEnabled: n3, mcpMetaToolSlimDescriptors: u2, alwaysExposeVirtualMcpAuthTool: p2, mcpAuthStatusCopyConfigRaw: h2, pushRequestContextEnabled: m3 } = r3, g2 = new s.yt([new l.jX(t3), new l.h2(new l.An({ subkey: "agent_exec_mcp_file_writer", mcpVersion: d }))]);
        let b2;
        try {
          b2 = (function(e4) {
            if (null === e4 || "object" != typeof e4 || Array.isArray(e4)) return;
            const t4 = e4, r4 = { authToolDescription: c(t4.authToolDescription), errorStatusMessage: c(t4.errorStatusMessage), needsAuthStatusMessageWithAuthTool: c(t4.needsAuthStatusMessageWithAuthTool) };
            return Object.values(r4).every((e5) => void 0 === e5) ? void 0 : r4;
          })(h2);
        } catch {
          b2 = void 0;
        }
        const f = new o.x7h(e3.mcpLease, e3.projectDir, { loggerBackend: g2, mcpAuthCopyOverrides: b2, alwaysExposeVirtualMcpAuthTool: p2, snapshotProvider: e3.mcpLease.snapshotProvider, mcpVersion: d, onDidWrite: m3 ? (e4) => {
          a.cursor.pushMcpFileSystemDescriptors(e4);
        } : void 0 });
        let y;
        const w = () => (y ??= new o.aZ7(e3.mcpLease), y), v = (e4, t4) => f.getMcpFileSystemOptions(e4, t4);
        return { snapshot: { metaToolEnabled: n3, slimDescriptors: u2, alwaysExposeVirtualMcpAuthTool: p2, fileSystemWriterRegistered: true, allowlistLogRegistered: true }, resourceDefaults: { mcpMetaToolEnabled: n3, mcpMetaToolSlimDescriptors: u2, alwaysExposeVirtualMcpAuthTool: p2, getMcpFileSystemOptions: v }, createSessionOverrides: ({ session: e4 }) => ({ overrides: { mcpElicitationFactory: new i(async (t4, r4, s2, o2, a2) => await e4.mcpElicitationHandler(t4, r4, s2, o2, a2)), mcpStateAccessor: w(), getMcpFileSystemOptions: v, mcpMetaToolEnabled: n3, mcpMetaToolSlimDescriptors: u2, alwaysExposeVirtualMcpAuthTool: p2 } }), dispose: () => {
          f.dispose(), y?.dispose(), t3.dispose();
        } };
      })(e2, b, { mcpMetaToolEnabled: t2, mcpMetaToolSlimDescriptors: r2, alwaysExposeVirtualMcpAuthTool: n2, mcpAuthStatusCopyConfigRaw: m2, pushRequestContextEnabled: g });
    } catch (e3) {
      throw b.dispose(), e3;
    }
  }
}