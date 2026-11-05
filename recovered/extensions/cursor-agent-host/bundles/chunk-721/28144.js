// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/721.js sha256:1383ea7d1062c82dfc8e309d4c0b5bfbc7206bfabbc76ae1ba60806d82d254ec
// module: 28144 range:73..4126
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28144: (e, t, r) => {
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
}