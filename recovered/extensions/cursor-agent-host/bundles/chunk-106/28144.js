// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/106.js sha256:3de5cb3765db663a93a8a38199d4a224dc3a9b820e99727ce18df44f0d1e11f5
// module: 28144 range:10280..14333
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28144: (e, t, o) => {
  o.d(t, { An: () => l, E5: () => h, e5: () => p, h2: () => d, jX: () => u });
  var r = o(91105), s = o(91398), n = o(30306);
  const a = "mcp", i = { disableConsoleFallback: true }, c = (async () => {
    try {
      return await s.cursor.checkFeatureGate("mcp_structured_logging");
    } catch {
      return false;
    }
  })();
  class l {
    constructor(e2) {
      this.options = e2;
    }
    log(e2, t2) {
      var o2;
      o2 = () => {
        const e3 = this.buildMcpMetadata(t2.metadata), o3 = t2.error instanceof Error ? t2.error : void 0;
        switch (t2.level) {
          case "debug":
            s.cursor.logStructuredDebug(a, t2.message, e3, i);
            break;
          case "info":
            s.cursor.logStructuredInfo(a, t2.message, e3, i);
            break;
          case "warn":
            s.cursor.logStructuredWarn(a, t2.message, e3, i);
            break;
          case "error":
            s.cursor.logStructuredError(a, t2.message, o3, e3, i);
            break;
          default: {
            const e4 = t2.level;
            throw new Error(`Unhandled log level: ${e4}`);
          }
        }
      }, c.then((e3) => {
        e3 && o2();
      });
    }
    buildMcpMetadata(e2) {
      const t2 = { subkey: this.options.subkey, mcp_version: this.options.mcpVersion };
      if (void 0 !== this.options.identifier && (t2.identifier = this.options.identifier), e2) for (const [o2, r2] of Object.entries(e2)) t2[o2] = r2;
      return { mcpMeta: t2 };
    }
  }
  class d {
    constructor(e2, t2 = r.utt) {
      this.backend = e2, this.metadataKey = t2;
    }
    log(e2, t2) {
      if (true !== t2.metadata?.[this.metadataKey]) return;
      const o2 = { ...t2.metadata ?? {} };
      delete o2[this.metadataKey], this.backend.log(e2, { ...t2, metadata: o2 });
    }
  }
  class u {
    constructor(e2) {
      this.outputChannel = e2;
    }
    log(e2, t2) {
      const { level: o2, message: r2, metadata: s2, error: n2 } = t2;
      let a2 = r2;
      if (s2 && Object.keys(s2).length > 0) try {
        a2 += ` ${JSON.stringify(s2)}`;
      } catch {
        a2 += " [metadata not serializable]";
      }
      switch (o2) {
        case "debug":
          this.outputChannel.debug(a2), n2 && this.outputChannel.debug(this.formatError(n2));
          break;
        case "info":
          this.outputChannel.info(a2), n2 && this.outputChannel.info(this.formatError(n2));
          break;
        case "warn":
          this.outputChannel.warn(a2), n2 && this.outputChannel.warn(this.formatError(n2));
          break;
        case "error":
          this.outputChannel.error(a2), n2 && this.outputChannel.error(this.formatError(n2));
          break;
        default:
          throw new Error(`Unhandled log level: ${o2}`);
      }
    }
    formatError(e2) {
      return e2 instanceof Error ? `${e2.message}
${e2.stack ?? ""}` : String(e2);
    }
  }
  const m = "agent_exec";
  class p {
    log(e2, t2) {
      const { level: o2, message: r2, metadata: a2, error: i2 } = t2, c2 = i2 instanceof Error ? i2 : void 0, l2 = (0, n.QE)(a2);
      switch (o2) {
        case "debug":
          s.cursor.logStructuredDebug(m, r2, a2);
          break;
        case "info":
          s.cursor.logStructuredInfo(m, r2, a2);
          break;
        case "warn":
          s.cursor.logStructuredWarn(m, r2, l2, n.bn);
          break;
        case "error":
          s.cursor.logStructuredError(m, r2, c2, l2, n.bn);
          break;
        default:
          throw new Error(`Unhandled log level: ${o2}`);
      }
    }
  }
  class h {
    record(e2, t2, o2, r2) {
      s.cursor.metricsGauge({ stat: t2.name, value: o2, tags: r2 });
    }
    increment(e2, t2, o2, r2) {
      s.cursor.metricsIncrement({ stat: t2.name, value: o2 ?? 1, tags: r2 });
    }
    gauge(e2, t2, o2, r2) {
      s.cursor.metricsGauge({ stat: t2.name, value: o2, tags: r2 });
    }
    histogram(e2, t2, o2, r2) {
      s.cursor.metricsDistribution({ stat: t2.name, value: o2, tags: r2 });
    }
  }
}