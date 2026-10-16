"use strict";
exports.id = 721, exports.ids = [721], exports.modules = { 28144: (e, t, r) => {
  r.d(t, { An: () => l, E5: () => m, e5: () => d, h2: () => u, jX: () => p });
  var s = r(91105), o = r(91398), a = r(30306);
  const c = "mcp", i = { disableConsoleFallback: true }, n = (async () => {
    try {
      return await o.cursor.checkFeatureGate("mcp_structured_logging");
    } catch {
      return false;
    }
  })();
  class l {
    constructor(e2) {
      this.options = e2;
    }
    log(e2, t2) {
      var r2;
      r2 = () => {
        const e3 = this.buildMcpMetadata(t2.metadata), r3 = t2.error instanceof Error ? t2.error : void 0;
        switch (t2.level) {
          case "debug":
            o.cursor.logStructuredDebug(c, t2.message, e3, i);
            break;
          case "info":
            o.cursor.logStructuredInfo(c, t2.message, e3, i);
            break;
          case "warn":
            o.cursor.logStructuredWarn(c, t2.message, e3, i);
            break;
          case "error":
            o.cursor.logStructuredError(c, t2.message, r3, e3, i);
            break;
          default: {
            const e4 = t2.level;
            throw new Error(`Unhandled log level: ${e4}`);
          }
        }
      }, n.then((e3) => {
        e3 && r2();
      });
    }
    buildMcpMetadata(e2) {
      const t2 = { subkey: this.options.subkey, mcp_version: this.options.mcpVersion };
      if (void 0 !== this.options.identifier && (t2.identifier = this.options.identifier), e2) for (const [r2, s2] of Object.entries(e2)) t2[r2] = s2;
      return { mcpMeta: t2 };
    }
  }
  class u {
    constructor(e2, t2 = s.utt) {
      this.backend = e2, this.metadataKey = t2;
    }
    log(e2, t2) {
      if (true !== t2.metadata?.[this.metadataKey]) return;
      const r2 = { ...t2.metadata ?? {} };
      delete r2[this.metadataKey], this.backend.log(e2, { ...t2, metadata: r2 });
    }
  }
  class p {
    constructor(e2) {
      this.outputChannel = e2;
    }
    log(e2, t2) {
      const { level: r2, message: s2, metadata: o2, error: a2 } = t2;
      let c2 = s2;
      if (o2 && Object.keys(o2).length > 0) try {
        c2 += ` ${JSON.stringify(o2)}`;
      } catch {
        c2 += " [metadata not serializable]";
      }
      switch (r2) {
        case "debug":
          this.outputChannel.debug(c2), a2 && this.outputChannel.debug(this.formatError(a2));
          break;
        case "info":
          this.outputChannel.info(c2), a2 && this.outputChannel.info(this.formatError(a2));
          break;
        case "warn":
          this.outputChannel.warn(c2), a2 && this.outputChannel.warn(this.formatError(a2));
          break;
        case "error":
          this.outputChannel.error(c2), a2 && this.outputChannel.error(this.formatError(a2));
          break;
        default:
          throw new Error(`Unhandled log level: ${r2}`);
      }
    }
    formatError(e2) {
      return e2 instanceof Error ? `${e2.message}
${e2.stack ?? ""}` : String(e2);
    }
  }
  const h = "agent_exec";
  class d {
    log(e2, t2) {
      const { level: r2, message: s2, metadata: c2, error: i2 } = t2, n2 = i2 instanceof Error ? i2 : void 0, l2 = (0, a.QE)(c2);
      switch (r2) {
        case "debug":
          o.cursor.logStructuredDebug(h, s2, c2);
          break;
        case "info":
          o.cursor.logStructuredInfo(h, s2, c2);
          break;
        case "warn":
          o.cursor.logStructuredWarn(h, s2, l2, a.bn);
          break;
        case "error":
          o.cursor.logStructuredError(h, s2, n2, l2, a.bn);
          break;
        default:
          throw new Error(`Unhandled log level: ${r2}`);
      }
    }
  }
  class m {
    record(e2, t2, r2, s2) {
      o.cursor.metricsGauge({ stat: t2.name, value: r2, tags: s2 });
    }
    increment(e2, t2, r2, s2) {
      o.cursor.metricsIncrement({ stat: t2.name, value: r2 ?? 1, tags: s2 });
    }
    gauge(e2, t2, r2, s2) {
      o.cursor.metricsGauge({ stat: t2.name, value: r2, tags: s2 });
    }
    histogram(e2, t2, r2, s2) {
      o.cursor.metricsDistribution({ stat: t2.name, value: r2, tags: s2 });
    }
  }
}, 65721: (e, t, r) => {
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
} };
