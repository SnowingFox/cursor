// @recovered-by cursor-re
// artifact: app/extensions/cursor-ndjson-ingest/dist/main.js sha256:c20522000288197a1017b7169f8d5c503fe24f6cafe518222b9f24bea4fea3dc
// module: 93 range:37..6535
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
93: (e2, t2, r2) => {
    r2.r(t2), r2.d(t2, { DEFAULT_NDJSON_PORT_RANGE_END: () => h, DEFAULT_NDJSON_PORT_RANGE_START: () => f, NdjsonIngestServer: () => N, NdjsonServerStartError: () => w, chooseNdjsonPort: () => v, isPortAvailable: () => l, resolveLogger: () => d });
    const o2 = require("node:events"), n2 = require("node:fs"), s2 = require("node:http"), i = require("node:path"), a = require("node:stream/promises"), c = { info: () => {
    }, warn: () => {
    }, error: () => {
    } };
    function d(e3) {
      return e3 ?? c;
    }
    const g = require("node:stream"), u = /^[a-zA-Z0-9-]+$/;
    async function l(e3, t3) {
      return new Promise((r3) => {
        const o3 = s2.createServer();
        o3.once("error", () => r3(false)), o3.once("listening", () => {
          o3.close(() => r3(true));
        }), o3.listen(e3, t3);
      });
    }
    function p(e3) {
      if (e3 && u.test(e3)) return e3;
    }
    const f = 7242, h = 7942;
    class w extends Error {
      constructor(e3) {
        super(e3.message), this.name = "NdjsonServerStartError", this.code = e3.code, this.port = e3.port, void 0 !== e3.cause && (this.cause = e3.cause);
      }
    }
    async function v(e3) {
      const t3 = e3.configuredPort ?? 0;
      if (0 !== t3) return t3;
      const r3 = new Set((e3.excludedPorts ?? []).filter((e4) => e4 > 0)), o3 = e3.previouslyAllocatedPort ?? 0;
      if (0 !== o3 && !r3.has(o3)) {
        if (await l(o3, e3.bindAddress)) return d(e3.logger).info(`Reusing previously allocated port ${o3}`), o3;
        d(e3.logger).info(`Previously allocated port ${o3} is unavailable; scanning for a new port`);
      }
      const n3 = e3.rangeStart ?? f, s3 = e3.rangeEnd ?? h;
      if (n3 > s3) throw new Error(`Invalid port range ${n3}-${s3}`);
      const i2 = s3 - n3 + 1, a2 = Math.floor(Math.random() * i2);
      for (let t4 = 0; t4 < i2; t4++) {
        const o4 = n3 + (a2 + t4) % i2;
        if (!r3.has(o4) && await l(o4, e3.bindAddress)) return await e3.onAutoAllocatedPort?.(o4), d(e3.logger).info(`Auto-allocated port ${o4} and saved to internal storage`), o4;
      }
      throw new Error(`No available ports in range ${n3}-${s3}`);
    }
    class N {
      constructor(e3) {
        this.options = e3, this.currentPort = 0, this.writeQueue = Promise.resolve(), this.logger = d(e3.logger);
      }
      getLoopbackUrl() {
        if (this.currentPort) return `http://${this.options.bindAddress}:${this.currentPort}/ingest/${this.options.ingestPathId}`;
      }
      getLogDirectory() {
        return this.options.logDirectory;
      }
      getLogPathForSession(e3) {
        const t3 = p(e3);
        if (!t3) throw new Error("Expected a valid debug session id");
        return (0, i.join)(this.options.logDirectory, `debug-${t3}.log`);
      }
      async start() {
        if (this.server) return this.buildStartResult();
        n2.mkdirSync(this.options.logDirectory, { recursive: true });
        const e3 = s2.createServer((e4, t4) => this.handleRequest(e4, t4));
        try {
          await this.listen(e3);
        } catch (t4) {
          throw e3.removeAllListeners(), (function(e4, t5) {
            if (e4 instanceof w) return e4;
            if (e4 instanceof Error) {
              const r3 = e4.message || `Failed to start NDJSON server on port ${t5}`;
              return new w({ message: r3, port: t5, code: y(e4), cause: e4 });
            }
            return new w({ message: `Failed to start NDJSON server on port ${t5}`, port: t5, cause: e4 });
          })(t4, this.options.port);
        }
        this.server = e3;
        const t3 = this.server.address();
        return this.currentPort = t3?.port ?? 0, this.logger.info(`NDJSON ingest server started on port ${this.currentPort} in directory ${this.options.logDirectory}`), this.buildStartResult();
      }
      async stop() {
        const e3 = this.server;
        e3 && (e3.closeAllConnections(), e3.close(), await (0, o2.once)(e3, "close"), this.server = void 0, this.currentPort = 0);
      }
      async appendExclusive(e3, t3) {
        const r3 = async () => {
          const r4 = n2.createWriteStream(t3, { flags: "a" });
          await (0, a.pipeline)(e3, (function() {
            let e4 = 10;
            return new g.Transform({ transform(t4, r5, o4) {
              t4.length > 0 && (e4 = t4[t4.length - 1]), o4(null, t4);
            }, flush(t4) {
              10 !== e4 && this.push(Buffer.from("\n")), t4();
            } });
          })(), r4);
        }, o3 = this.writeQueue.then(r3, r3);
        return this.writeQueue = o3.catch((e4) => {
          this.logger.error("Error appending to log file:", e4);
        }), o3;
      }
      buildStartResult() {
        const e3 = this.getLoopbackUrl();
        if (!e3) throw new Error("NDJSON server is not listening");
        return { loopbackUrl: e3, logDirectory: this.options.logDirectory };
      }
      async handleRequest(e3, t3) {
        if (t3.setHeader("Access-Control-Allow-Origin", "*"), t3.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"), t3.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Debug-Session-Id"), "OPTIONS" === e3.method) return t3.writeHead(200), void t3.end();
        if ("POST" !== e3.method || e3.url !== `/ingest/${this.options.ingestPathId}`) return t3.writeHead(404), void t3.end();
        const r3 = e3.headers["x-debug-session-id"];
        if (void 0 === r3) return this.logger.warn("Rejected NDJSON ingest request without X-Debug-Session-Id header"), t3.writeHead(400), void t3.end("missing-session-id");
        if ("string" != typeof r3) return this.logger.warn("Rejected NDJSON ingest request with invalid X-Debug-Session-Id header"), t3.writeHead(400), void t3.end("invalid-session-id");
        const o3 = p(r3);
        if (!o3) return this.logger.warn("Rejected NDJSON ingest request with invalid X-Debug-Session-Id header"), t3.writeHead(400), void t3.end("invalid-session-id");
        try {
          const r4 = this.getLogPathForSession(o3);
          await this.appendExclusive(e3, r4), t3.writeHead(204), t3.end();
        } catch (e4) {
          this.logger.error("NDJSON ingest write error:", e4), t3.writeHead(500), t3.end("write-failed");
        }
      }
      async listen(e3) {
        e3.listen(this.options.port, this.options.bindAddress), await (0, o2.once)(e3, "listening");
      }
    }
    function y(e3) {
      if ("code" in e3 && "string" == typeof e3.code) return e3.code;
    }
  }